 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/INSTALLATION.md b/INSTALLATION.md
index 37c3623995516e4583462b0c53f04888f0300214..7601c872c764f56eeac0b11286cbb4753f7649f8 100644
--- a/INSTALLATION.md
+++ b/INSTALLATION.md
@@ -1,54 +1,54 @@
-# travel_agency_2-travel-wanderlust - Installation Guide
+# gallant-travel-agency - Installation Guide
 
 Get your Next.js template up and running in minutes.
 
 ---
 
 ## Prerequisites
 
 - **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
 - **npm** (comes with Node.js) or **yarn**
 - A code editor like **VS Code** (recommended)
 
 To verify Node.js is installed:
 ```bash
 node --version
 npm --version
 ```
 
 ---
 
 ## Installation Steps
 
 ### Step 1: Extract the Template
 
 Extract the downloaded zip file:
 
 ```bash
-unzip travel_agency_2-travel-wanderlust_nextjs.zip
-cd travel_agency_2-travel-wanderlust
+unzip gallant-travel-agency_nextjs.zip
+cd gallant-travel-agency
 ```
 
 **What's Inside:**
 - `src/` - Next.js pages and components
 - `public/` - Static assets
 - `package.json` - Project dependencies
 - `tailwind.config.js` - Tailwind CSS configuration
 
 **Router Type:** This template uses the **App Router**.
 
 ---
 
 ### Step 2: Install Dependencies
 
 ```bash
 npm install
 ```
 
 Or with yarn:
 ```bash
 yarn install
 ```
 
 ---
 
@@ -58,51 +58,51 @@ yarn install
 npm run dev
 ```
 
 Your site will be available at **http://localhost:3000**
 
 ---
 
 ## Building for Production
 
 Create an optimized production build:
 
 ```bash
 npm run build
 ```
 
 Start the production server:
 ```bash
 npm run start
 ```
 
 ---
 
 ## Project Structure
 
 ```
-travel_agency_2-travel-wanderlust/
+gallant-travel-agency/
 ├── public/
 ├── src/
 │   ├── app/          # App Router pages
 │   ├── components/     # Reusable UI components
 │   ├── lib/
 │   │   ├── utils/      # Utility functions
 │   │   └── data/       # Static data and content
 │   └── styles/         # CSS files
 ├── package.json
 ├── next.config.js
 └── tailwind.config.js
 ```
 
 ---
 
 ## Available Scripts
 
 | Command | Description |
 |---------|-------------|
 | `npm run dev` | Start development server |
 | `npm run build` | Build for production |
 | `npm run start` | Start production server |
 | `npm run lint` | Run ESLint |
 
 ---
 
EOF
)