import { app, BrowserWindow, Menu, ipcMain, dialog } from 'electron';
import * as path from 'path';
import { createAncientWisdomMenu } from './menu/ancientWisdomMenu';
import { AICodeGenerationService } from './services/AICodeGenerationService';
import { SamsungIntegrationService } from './services/SamsungIntegrationService';
import { LicenseComplianceService } from './services/LicenseComplianceService';

class PolyStackIDE {
  private mainWindow: BrowserWindow | null = null;
  private aiService: AICodeGenerationService;
  private samsungService: SamsungIntegrationService;
  private licenseService: LicenseComplianceService;

  constructor() {
    this.aiService = new AICodeGenerationService();
    this.samsungService = new SamsungIntegrationService();
    this.licenseService = new LicenseComplianceService();
  }

  async initialize(): Promise<void> {
    console.log('🏛️ Initializing PolyStack IDE with Ancient Wisdom...');
    
    // Initialize services
    await this.aiService.initialize();
    await this.samsungService.initialize();
    await this.licenseService.initialize();
    
    // Set up Electron app
    await app.whenReady();
    this.createMainWindow();
    this.setupIpcHandlers();
    this.setupMenu();
    
    console.log('✅ PolyStack IDE initialized successfully');
  }

  private createMainWindow(): void {
    this.mainWindow = new BrowserWindow({
      width: 1400,
      height: 900,
      minWidth: 1200,
      minHeight: 700,
      icon: path.join(__dirname, '../assets/icon.png'),
      titleBarStyle: 'hiddenInset',
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        enableRemoteModule: false,
        preload: path.join(__dirname, 'preload.js'),
      },
      show: false,
    });

    // Load the renderer
    if (process.env.NODE_ENV === 'development') {
      this.mainWindow.loadURL('http://localhost:3002');
      this.mainWindow.webContents.openDevTools();
    } else {
      this.mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
    }

    // Show window when ready
    this.mainWindow.once('ready-to-show', () => {
      this.mainWindow?.show();
      this.showWelcomeMessage();
    });

    // Handle window closed
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }

  private setupIpcHandlers(): void {
    // AI Code Generation
    ipcMain.handle('ai:generate-code', async (event, prompt: string, language: string) => {
      return await this.aiService.generateCode(prompt, language);
    });

    ipcMain.handle('ai:complete-code', async (event, code: string, position: number) => {
      return await this.aiService.completeCode(code, position);
    });

    ipcMain.handle('ai:generate-grant-proposal', async (event, projectData: any) => {
      return await this.aiService.generateGrantProposal(projectData);
    });

    // Samsung Integration
    ipcMain.handle('samsung:verify-device', async () => {
      return await this.samsungService.verifyDevice();
    });

    ipcMain.handle('samsung:get-dev-tools', async () => {
      return await this.samsungService.getExclusiveDevTools();
    });

    // License Compliance
    ipcMain.handle('license:scan-project', async (event, projectPath: string) => {
      return await this.licenseService.scanProject(projectPath);
    });

    ipcMain.handle('license:verify-iron-rule', async (event, projectData: any) => {
      return await this.licenseService.verifyIronRuleCompliance(projectData);
    });

    // File Operations
    ipcMain.handle('file:open-dialog', async () => {
      const result = await dialog.showOpenDialog(this.mainWindow!, {
        properties: ['openDirectory'],
        title: 'Open Project Folder',
      });
      return result;
    });

    ipcMain.handle('file:save-dialog', async () => {
      const result = await dialog.showSaveDialog(this.mainWindow!, {
        title: 'Save Project',
        defaultPath: 'polystack-project',
        filters: [
          { name: 'All Files', extensions: ['*'] }
        ]
      });
      return result;
    });
  }

  private setupMenu(): void {
    const menu = createAncientWisdomMenu(this.mainWindow!);
    Menu.setApplicationMenu(menu);
  }

  private showWelcomeMessage(): void {
    if (this.mainWindow) {
      this.mainWindow.webContents.executeJavaScript(`
        console.log('🏛️ Welcome to PolyStack IDE - Where Ancient Wisdom Meets Modern Code');
        console.log('⚖️ Iron Rule Framework: Commission or charitable donation only');
        console.log('💎 Rhodium-backed development environment');
        console.log('🔒 Samsung Ultra exclusive features enabled');
      `);
    }
  }
}

// App event handlers
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    const ide = new PolyStackIDE();
    await ide.initialize();
  }
});

// Prevent multiple instances
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, focus our window instead
    const windows = BrowserWindow.getAllWindows();
    if (windows.length > 0) {
      const mainWindow = windows[0];
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

// Initialize the IDE
const polyStackIDE = new PolyStackIDE();
polyStackIDE.initialize().catch(console.error);