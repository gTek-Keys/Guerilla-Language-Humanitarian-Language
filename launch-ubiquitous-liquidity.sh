#!/bin/bash

# 🌊 Ubiquitous Liquidity Platform Launcher
# Revolutionary blockchain liquidity management system
# Built by gTek Ecosystem with ancient wisdom and modern innovation

echo "🌊 ========================================="
echo "   UBIQUITOUS LIQUIDITY PLATFORM LAUNCHER"
echo "🏛️ Saqqara-Giza Architectural Framework"
echo "⚖️ Iron Rule Framework - Commission Only"
echo "========================================="

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Sacred geometry constants
GOLDEN_RATIO="1.618033988749894848204586834365638117"
FIBONACCI_DEPTH="21"
PYRAMID_ANGLE="51.84"

echo -e "${CYAN}🔮 Sacred Geometry Initialization...${NC}"
echo -e "   Golden Ratio (φ): ${GOLDEN_RATIO}"
echo -e "   Fibonacci Depth: ${FIBONACCI_DEPTH}"
echo -e "   Pyramid Angle: ${PYRAMID_ANGLE}°"
echo ""

# Check Node.js version
echo -e "${BLUE}🔍 Checking system requirements...${NC}"
NODE_VERSION=$(node --version 2>/dev/null || echo "not found")
if [[ $NODE_VERSION == "not found" ]]; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js 18+ to continue.${NC}"
    exit 1
elif [[ ${NODE_VERSION:1:2} -lt 18 ]]; then
    echo -e "${YELLOW}⚠️  Node.js version ${NODE_VERSION} detected. Recommended: v18+${NC}"
else
    echo -e "${GREEN}✅ Node.js ${NODE_VERSION} detected${NC}"
fi

# Check for package.json
if [ ! -f "ubiquitous-liquidity-platform/package.json" ]; then
    echo -e "${RED}❌ Ubiquitous Liquidity Platform not found. Please ensure you're in the correct directory.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Ubiquitous Liquidity Platform detected${NC}"

# Check Git status
echo -e "${BLUE}📊 Git repository status:${NC}"
git status --porcelain
echo ""

# Menu system
echo -e "${PURPLE}🚀 Launch Options:${NC}"
echo "1. 📦 Install all dependencies"
echo "2. 🛠️  Build all components"
echo "3. 🧪 Run tests"
echo "4. 🔧 Development mode (backend + frontend)"
echo "5. 🚀 Production deployment"
echo "6. 🔒 Security audit"
echo "7. 📊 Platform status"
echo "8. 🏛️ Federal compliance check"
echo "9. 💎 Rhodium price update"
echo "10. 🌍 Natural resources sync"
echo "11. 📐 Sacred geometry optimization"
echo "12. 🔄 Full platform restart"
echo "0. 🚪 Exit"
echo ""

read -p "Select an option (0-12): " choice

case $choice in
    1)
        echo -e "${CYAN}📦 Installing all dependencies...${NC}"
        cd ubiquitous-liquidity-platform
        npm run install:all
        echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
        ;;
    2)
        echo -e "${CYAN}🛠️  Building all components...${NC}"
        cd ubiquitous-liquidity-platform
        npm run build
        echo -e "${GREEN}✅ Build completed successfully${NC}"
        ;;
    3)
        echo -e "${CYAN}🧪 Running comprehensive test suite...${NC}"
        cd ubiquitous-liquidity-platform
        npm test
        echo -e "${GREEN}✅ Tests completed${NC}"
        ;;
    4)
        echo -e "${CYAN}🔧 Starting development servers...${NC}"
        echo -e "${YELLOW}🌊 Blockchain node: http://localhost:8545${NC}"
        echo -e "${YELLOW}🖥️  Backend API: http://localhost:3000${NC}"
        echo -e "${YELLOW}🎨 Frontend app: http://localhost:3001${NC}"
        cd ubiquitous-liquidity-platform
        npm run dev
        ;;
    5)
        echo -e "${CYAN}🚀 Deploying to production...${NC}"
        cd ubiquitous-liquidity-platform
        npm run deploy:mainnet
        npm run start
        echo -e "${GREEN}✅ Production deployment initiated${NC}"
        ;;
    6)
        echo -e "${CYAN}🔒 Running security audit...${NC}"
        cd ubiquitous-liquidity-platform
        npm run security:audit
        npm audit
        echo -e "${GREEN}✅ Security audit completed${NC}"
        ;;
    7)
        echo -e "${CYAN}📊 Checking platform status...${NC}"
        cd ubiquitous-liquidity-platform
        echo -e "${BLUE}Package Information:${NC}"
        npm list --depth=0
        echo -e "${BLUE}Git Status:${NC}"
        git log --oneline -5
        echo -e "${GREEN}✅ Status check completed${NC}"
        ;;
    8)
        echo -e "${CYAN}🏛️ Running federal compliance checks...${NC}"
        cd ubiquitous-liquidity-platform
        npm run compliance:nist
        npm run compliance:cmmc
        npm run compliance:soc2
        echo -e "${GREEN}✅ Compliance checks completed${NC}"
        ;;
    9)
        echo -e "${CYAN}💎 Updating rhodium price oracle...${NC}"
        cd ubiquitous-liquidity-platform
        npm run rhodium:price-update
        echo -e "${GREEN}✅ Rhodium prices updated${NC}"
        ;;
    10)
        echo -e "${CYAN}🌍 Syncing natural resources data...${NC}"
        cd ubiquitous-liquidity-platform
        npm run natural-resources:update
        echo -e "${GREEN}✅ Natural resources data synchronized${NC}"
        ;;
    11)
        echo -e "${CYAN}📐 Optimizing sacred geometry calculations...${NC}"
        cd ubiquitous-liquidity-platform
        npm run sacred-geometry:optimize
        echo -e "${GREEN}✅ Sacred geometry optimized (φ = ${GOLDEN_RATIO})${NC}"
        ;;
    12)
        echo -e "${CYAN}🔄 Performing full platform restart...${NC}"
        echo -e "${YELLOW}🛑 Stopping all services...${NC}"
        pkill -f "node.*ubiquitous-liquidity"
        pkill -f "hardhat"
        sleep 2
        
        echo -e "${BLUE}🧹 Cleaning build artifacts...${NC}"
        cd ubiquitous-liquidity-platform
        npm run clean
        
        echo -e "${BLUE}📦 Reinstalling dependencies...${NC}"
        npm run install:all
        
        echo -e "${BLUE}🛠️  Rebuilding platform...${NC}"
        npm run build
        
        echo -e "${BLUE}🧪 Running health checks...${NC}"
        npm run test:contracts
        
        echo -e "${GREEN}🚀 Restarting platform services...${NC}"
        npm run dev &
        
        echo -e "${GREEN}✅ Full platform restart completed${NC}"
        echo -e "${CYAN}🌊 Ubiquitous Liquidity Platform is now running!${NC}"
        ;;
    0)
        echo -e "${PURPLE}🙏 Thank you for using Ubiquitous Liquidity Platform${NC}"
        echo -e "${CYAN}🏛️ Built with ancient wisdom and modern innovation${NC}"
        echo -e "${YELLOW}⚖️ Iron Rule Framework: Commission or charitable donation only${NC}"
        exit 0
        ;;
    *)
        echo -e "${RED}❌ Invalid option. Please select 0-12.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${PURPLE}==========================================${NC}"
echo -e "${CYAN}🌊 Ubiquitous Liquidity Platform Ready${NC}"
echo -e "${YELLOW}🏛️ Saqqara-Giza Framework Active${NC}"
echo -e "${GREEN}💎 Rhodium Collateral System Online${NC}"
echo -e "${BLUE}🔐 Zero-Knowledge Encryption Enabled${NC}"
echo -e "${PURPLE}==========================================${NC}"
echo ""
echo -e "${CYAN}🔗 Quick Links:${NC}"
echo -e "   📚 Documentation: ./ubiquitous-liquidity-platform/README.md"
echo -e "   🏛️ Federal APIs: SAM.gov, GSA, Treasury integration"
echo -e "   🌍 Natural Resources: Land, water, air, mineral valuation"
echo -e "   ⚖️ gTek Entities: BFH Trust (40%), HMP (35%), MMI (25%)"
echo ""
echo -e "${YELLOW}\"As above, so below\" - Hermes Trismegistus${NC}"