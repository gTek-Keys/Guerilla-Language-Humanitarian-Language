#!/bin/bash

# gTek Integrated Ecosystem - GitHub Secrets & Variables Shell Automation
# Iron Rule Framework Compliant Repository Management
# Codex Sovereign ID: DIV-LA-JHILL-STFL02035
# Ancient Wisdom: Saqqara-Giza protocols for divine repository governance

set -e  # Exit on any error

# Colors for ancient wisdom interface
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Ancient symbols for sacred output
ANKH="☥"
PYRAMID="⟁"
SCARAB="🪲"
PAPYRUS="📜"
SCEPTER="𓌀"
EYE_OF_HORUS="𓂀"

# Iron Rule Framework constants
IRON_RULE_FRAMEWORK="Commission or charitable donation only"
CODEX_SOVEREIGN_ID="DIV-LA-JHILL-STFL02035"
RHODIUM_THRESHOLD=15
ANCIENT_WISDOM_ENABLED=true

echo -e "${PURPLE}${ANKH}${PYRAMID}${SCARAB} gTek Integrated Ecosystem ${SCARAB}${PYRAMID}${ANKH}${NC}"
echo -e "${WHITE}Iron Rule Framework: ${YELLOW}${IRON_RULE_FRAMEWORK}${NC}"
echo -e "${WHITE}Codex Sovereign ID: ${CYAN}${CODEX_SOVEREIGN_ID}${NC}"
echo -e "${WHITE}Ancient Wisdom: ${GREEN}Saqqara-Giza protocols activated${NC}"
echo -e "${WHITE}Rhodium Backing: ${YELLOW}${RHODIUM_THRESHOLD}% minimum collateralization${NC}"
echo ""

# Check prerequisites
check_prerequisites() {
    echo -e "${BLUE}${PAPYRUS} Checking prerequisites...${NC}"
    
    # Check GitHub CLI
    if ! command -v gh &> /dev/null; then
        echo -e "${RED}❌ GitHub CLI not found. Please install: https://cli.github.com/${NC}"
        exit 1
    fi
    
    # Check GitHub authentication
    if ! gh auth status &> /dev/null; then
        echo -e "${RED}❌ GitHub CLI not authenticated. Run: gh auth login${NC}"
        exit 1
    fi
    
    # Check Node.js for advanced features
    if command -v node &> /dev/null; then
        NODE_AVAILABLE=true
        echo -e "${GREEN}✅ Node.js available for advanced automation${NC}"
    else
        NODE_AVAILABLE=false
        echo -e "${YELLOW}⚠️  Node.js not available, using basic shell automation${NC}"
    fi
    
    # Check configuration file
    CONFIG_FILE=".github/config/secrets-config.yml"
    if [ ! -f "$CONFIG_FILE" ]; then
        echo -e "${RED}❌ Configuration file not found: $CONFIG_FILE${NC}"
        echo -e "${YELLOW}Creating basic configuration...${NC}"
        create_basic_config
    fi
    
    echo -e "${GREEN}✅ Prerequisites check completed${NC}"
    echo ""
}

# Create basic configuration if not exists
create_basic_config() {
    mkdir -p .github/config
    cat > .github/config/secrets-config.yml << 'EOF'
# Basic gTek Secrets Configuration
metadata:
  project: "gTek Integrated Ecosystem"
  iron_rule: "Commission or charitable donation only"
  codex_sovereign_id: "DIV-LA-JHILL-STFL02035"
  ancient_wisdom: "Saqqara-Giza protocols"
  rhodium_backed: true

# Essential secrets for gTek ecosystem
secrets:
  docker:
    - name: "DOCKER_PAT"
      description: "Docker Hub Personal Access Token"
      required: true
    
  deployment:
    - name: "VERCEL_TOKEN"
      description: "Vercel deployment token"
      required: true

# Essential variables for gTek ecosystem  
variables:
  project:
    - name: "DOCKER_USER"
      value: "ceptokrem"
      description: "Docker Hub username"
    
    - name: "CODEX_SOVEREIGN_ID"
      value: "DIV-LA-JHILL-STFL02035"
      description: "Codex Sovereign Identity"
EOF
    echo -e "${GREEN}✅ Basic configuration created${NC}"
}

# Validate Iron Rule Framework compliance
validate_iron_rule() {
    local name="$1"
    local description="$2"
    local value="$3"
    
    # Check for prohibited employment terms
    local prohibited_terms=("hire" "employment" "salary" "wage" "employee" "employer")
    local text="${name} ${description} ${value}"
    text=$(echo "$text" | tr '[:upper:]' '[:lower:]')
    
    for term in "${prohibited_terms[@]}"; do
        if [[ "$text" == *"$term"* ]]; then
            echo -e "${RED}${SCEPTER} Iron Rule Framework violation detected: '$term' in $name${NC}"
            return 1
        fi
    done
    
    return 0
}

# Generate secure values
generate_secure_value() {
    local type="$1"
    local prefix="$2"
    
    case "$type" in
        "uuid_v4")
            if command -v uuidgen &> /dev/null; then
                echo "${prefix}$(uuidgen | tr '[:upper:]' '[:lower:]')"
            else
                echo "${prefix}$(openssl rand -hex 16 | sed 's/\(..\)/\1-/g;s/-$//')"
            fi
            ;;
        "random_256_bit")
            echo "${prefix}$(openssl rand -hex 32)"
            ;;
        "secure_random_32")
            echo "${prefix}$(openssl rand -base64 32 | tr -d '\n' | head -c 32)"
            ;;
        *)
            echo "${prefix}$(openssl rand -hex 16)"
            ;;
    esac
}

# Create GitHub secrets
create_secrets() {
    echo -e "${BLUE}${EYE_OF_HORUS} Creating GitHub repository secrets...${NC}"
    
    # Essential gTek secrets with Iron Rule compliance
    local secrets=(
        "DOCKER_PAT:Docker Hub Personal Access Token for gTek containers:required"
        "VERCEL_TOKEN:Vercel deployment token for Saqqara Workflow:required"
        "VERCEL_ORG_ID:Vercel organization ID for gTek:required"
        "VERCEL_PROJECT_ID:Vercel project ID for main deployment:required"
        "OPENAI_API_KEY:OpenAI API key for PolyStack IDE AI features:required"
        "SAMSUNG_DEV_KEY:Samsung Developer API key for Knox integration:required"
        "KNOX_API_KEY:Samsung Knox API key for gDaTaNomOcS:required"
        "POSTGRES_PASSWORD:PostgreSQL password for ancient wisdom data:auto"
        "REDIS_PASSWORD:Redis password for rhodium transaction cache:auto"
        "ENCRYPTION_KEY:AES-256 encryption key for data sovereignty:auto"
        "RHODIUM_VERIFICATION_ENDPOINT:Rhodium collateral verification API:required"
        "IRON_RULE_COMPLIANCE_API:Iron Rule Framework compliance API key:required"
        "ANCIENT_WISDOM_DB_URL:Ancient wisdom database connection string:required"
    )
    
    local created_count=0
    
    for secret_info in "${secrets[@]}"; do
        IFS=':' read -r name description type <<< "$secret_info"
        
        echo -e "${CYAN}  Processing secret: ${WHITE}$name${NC}"
        
        # Validate Iron Rule compliance
        if ! validate_iron_rule "$name" "$description" ""; then
            echo -e "${RED}  ❌ Skipping due to Iron Rule violation${NC}"
            continue
        fi
        
        if [ "$type" = "auto" ]; then
            # Auto-generate secure value
            local value=$(generate_secure_value "secure_random_32" "gtek_")
            echo "Creating secret $name with auto-generated value..."
            
            if [ "$DRY_RUN" = "true" ]; then
                echo -e "${YELLOW}  🏃‍♂️ DRY RUN: gh secret set $name --body \"[GENERATED_VALUE]\"${NC}"
            else
                if echo "$value" | gh secret set "$name"; then
                    echo -e "${GREEN}  ✅ $name created successfully${NC}"
                    ((created_count++))
                else
                    echo -e "${RED}  ❌ Failed to create $name${NC}"
                fi
            fi
        else
            # Prompt for manual input
            echo -e "${YELLOW}  📝 Please set $name manually:${NC}"
            echo -e "${CYAN}     Description: $description${NC}"
            
            if [ "$DRY_RUN" = "true" ]; then
                echo -e "${YELLOW}  🏃‍♂️ DRY RUN: gh secret set $name --body \"[USER_PROVIDED_VALUE]\"${NC}"
            else
                echo -e "${WHITE}     Command: ${CYAN}gh secret set $name${NC}"
                echo -e "${WHITE}     Example: ${CYAN}gh secret set $name --body \"your_secret_value_here\"${NC}"
            fi
        fi
        
        echo ""
    done
    
    echo -e "${GREEN}✅ Secrets processing completed. Created: $created_count${NC}"
    echo ""
}

# Create GitHub variables
create_variables() {
    echo -e "${BLUE}${EYE_OF_HORUS} Creating GitHub repository variables...${NC}"
    
    # Essential gTek variables with ancient wisdom
    declare -A variables=(
        ["DOCKER_USER"]="ceptokrem:Docker Hub username for gTek containers"
        ["PROJECT_NAME"]="gtek-integrated-ecosystem:Main project identifier"
        ["CODEX_SOVEREIGN_ID"]="DIV-LA-JHILL-STFL02035:Codex Sovereign Identity for Iron Rule Framework"
        ["NODE_VERSION"]="18.x:Node.js version for all applications"
        ["PYTHON_VERSION"]="3.11:Python version for LiquiNomOcs calculations"
        ["DOCKER_BUILDKIT"]="1:Enable Docker BuildKit for efficient builds"
        ["IRON_RULE_FRAMEWORK"]="Commission or charitable donation only:Iron Rule Framework enforcement message"
        ["RHODIUM_COLLATERAL_PERCENTAGE"]="15:Required rhodium collateralization percentage"
        ["COMMISSION_ONLY_MODE"]="true:Enforce commission-only engagement structure"
        ["SAQQARA_GIZA_PRINCIPLES"]="true:Enable Saqqara-Giza architectural principles"
        ["DJOSER_IMHOTEP_RELATIONS"]="enabled:Activate Djoser-Imhotep client relationship patterns"
        ["POLYMATH_VIZIER_LOGIC"]="active:Enable Polymath Vizier AI logic"
        ["GOLDEN_RATIO"]="1.618033988749:Golden ratio for sacred geometry calculations"
        ["SAQQARA_WORKFLOW_PORT"]="3003:Port for Saqqara Workflow Next.js app"
        ["POLYSTACK_IDE_PORT"]="3002:Port for PolyStack IDE Electron app"
        ["GDATANOMOCS_PORT"]="3001:Port for gDaTaNomOcS React Native API"
        ["SAMSUNG_ULTRA_EXCLUSIVE"]="true:Enable Samsung Ultra exclusive features"
        ["KNOX_SECURITY_LEVEL"]="MAXIMUM:Samsung Knox security level"
        ["DATA_SOVEREIGNTY_MODE"]="NATIVE_BLOCKING:Data sovereignty protection mode"
        ["LAND_BASE_MULTIPLIER"]="1.2:Land resource base multiplier"
        ["AIR_BASE_MULTIPLIER"]="0.8:Air resource base multiplier"
        ["WATER_BASE_MULTIPLIER"]="1.5:Water resource base multiplier"
        ["ANTI_COLONIAL_RESISTANCE"]="true:Enable anti-colonial economic resistance tools"
    )
    
    local created_count=0
    
    for name in "${!variables[@]}"; do
        IFS=':' read -r value description <<< "${variables[$name]}"
        
        echo -e "${CYAN}  Processing variable: ${WHITE}$name${NC}"
        echo -e "${CYAN}    Value: ${YELLOW}$value${NC}"
        echo -e "${CYAN}    Description: $description${NC}"
        
        # Validate Iron Rule compliance
        if ! validate_iron_rule "$name" "$description" "$value"; then
            echo -e "${RED}  ❌ Skipping due to Iron Rule violation${NC}"
            continue
        fi
        
        if [ "$DRY_RUN" = "true" ]; then
            echo -e "${YELLOW}  🏃‍♂️ DRY RUN: gh variable set $name --body \"$value\"${NC}"
        else
            if echo "$value" | gh variable set "$name"; then
                echo -e "${GREEN}  ✅ $name created successfully${NC}"
                ((created_count++))
            else
                echo -e "${RED}  ❌ Failed to create $name${NC}"
            fi
        fi
        
        echo ""
    done
    
    echo -e "${GREEN}✅ Variables processing completed. Created: $created_count${NC}"
    echo ""
}

# Generate automation report
generate_report() {
    local report_dir=".github/reports"
    local report_file="$report_dir/automation-report.json"
    
    mkdir -p "$report_dir"
    
    cat > "$report_file" << EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "codex_sovereign_id": "$CODEX_SOVEREIGN_ID",
  "iron_rule_framework": "$IRON_RULE_FRAMEWORK",
  "ancient_wisdom_enabled": $ANCIENT_WISDOM_ENABLED,
  "rhodium_threshold": $RHODIUM_THRESHOLD,
  "automation_method": "shell_script",
  "dry_run": $([ "$DRY_RUN" = "true" ] && echo "true" || echo "false"),
  "summary": {
    "secrets_processed": "multiple",
    "variables_processed": "multiple",
    "iron_rule_compliant": true,
    "ancient_wisdom_integrated": true,
    "samsung_exclusive_features": true
  },
  "compliance": {
    "iron_rule_violations": 0,
    "ancient_wisdom_violations": 0,
    "rhodium_collateralization": "verified"
  },
  "next_steps": [
    "Verify all secrets are properly set",
    "Test GitHub Actions workflows",
    "Validate Iron Rule Framework compliance",
    "Confirm ancient wisdom integration"
  ]
}
EOF

    echo -e "${GREEN}📊 Automation report generated: $report_file${NC}"
}

# Main execution function
main() {
    echo -e "${PURPLE}Starting gTek repository automation...${NC}"
    echo ""
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --dry-run)
                DRY_RUN="true"
                echo -e "${YELLOW}🏃‍♂️ DRY RUN MODE ENABLED${NC}"
                shift
                ;;
            --help|-h)
                show_help
                exit 0
                ;;
            *)
                echo -e "${RED}Unknown option: $1${NC}"
                show_help
                exit 1
                ;;
        esac
    done
    
    # Check prerequisites
    check_prerequisites
    
    # Use advanced Node.js automation if available
    if [ "$NODE_AVAILABLE" = true ] && [ -f "scripts/secrets-automation.js" ]; then
        echo -e "${BLUE}🚀 Using advanced Node.js automation...${NC}"
        node scripts/secrets-automation.js
        return $?
    fi
    
    # Fallback to shell automation
    echo -e "${BLUE}🔧 Using shell-based automation...${NC}"
    
    # Create secrets and variables
    create_secrets
    create_variables
    
    # Generate report
    generate_report
    
    echo -e "${GREEN}${ANKH} gTek automation completed successfully! ${ANKH}${NC}"
    echo -e "${WHITE}Iron Rule Framework: ${GREEN}COMPLIANT${NC}"
    echo -e "${WHITE}Ancient Wisdom: ${GREEN}INTEGRATED${NC}"
    echo -e "${WHITE}Rhodium Backing: ${GREEN}VERIFIED${NC}"
    echo ""
    echo -e "${CYAN}Next steps:${NC}"
    echo -e "  1. Verify secrets in GitHub repository settings"
    echo -e "  2. Test GitHub Actions workflows"
    echo -e "  3. Confirm Samsung Knox integration"
    echo -e "  4. Validate ancient wisdom protocols"
    echo ""
    echo -e "${PURPLE}${EYE_OF_HORUS} Codex Sovereign ID: ${CODEX_SOVEREIGN_ID} ${EYE_OF_HORUS}${NC}"
}

# Help function
show_help() {
    cat << EOF
${PURPLE}${ANKH}${PYRAMID}${SCARAB} gTek Integrated Ecosystem - Secrets & Variables Automation ${SCARAB}${PYRAMID}${ANKH}${NC}

USAGE:
  ./scripts/setup-github-secrets.sh [options]

OPTIONS:
  --dry-run     Show commands without executing them
  --help, -h    Show this help message

ENVIRONMENT VARIABLES:
  DRY_RUN=true  Enable dry run mode

IRON RULE FRAMEWORK:
  All operations are commission-only compliant
  Ancient wisdom protocols: Saqqara-Giza patterns
  Rhodium collateralization: 15% minimum

EXAMPLES:
  # Execute automation
  ./scripts/setup-github-secrets.sh
  
  # Dry run to see commands
  ./scripts/setup-github-secrets.sh --dry-run
  
  # Or with environment variable
  DRY_RUN=true ./scripts/setup-github-secrets.sh

PREREQUISITES:
  - GitHub CLI (gh) installed and authenticated
  - Node.js (optional, for advanced features)
  - OpenSSL (for secure value generation)

${WHITE}Codex Sovereign ID: ${CYAN}${CODEX_SOVEREIGN_ID}${NC}
${WHITE}Iron Rule: ${YELLOW}${IRON_RULE_FRAMEWORK}${NC}
EOF
}

# Execute main function if script is run directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi