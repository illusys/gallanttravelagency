 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 50568dce59281c87cfb5e636636a95d74820b38d..1b5d72c0f68a14cbf6087b00929fe57c45cd3dae 100644
--- a/README.md
+++ b/README.md
@@ -1,43 +1,40 @@
-<<<<<<< HEAD
-# travel_agency_2-travel-wanderlust
+# gallant-travel-agency
+
+A travel agency website for Gallant Travel Agency, built with Next.js App Router.
 
 ## Router Type
 
 This project uses the **App Router**.
 
 ## Getting Started
 
 1. Install dependencies:
    ```bash
    npm install
    ```
 
 2. Start the development server:
    ```bash
    npm run dev
    ```
 
 3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
 ## Project Structure
 
 ```
 src/
 ├── app/                # App Router pages
 ├── components/         # Reusable UI components
 ├── lib/
 │   ├── utils/          # Utility functions
 │   └── data/           # Static data and content
 └── styles/             # CSS and style files
 ```
 
 ## Available Scripts
 
 - `npm run dev` - Start development server
 - `npm run build` - Build for production
 - `npm run start` - Start production server
 - `npm run lint` - Run ESLint
-=======
-# gallanttravelagency
-A travel agency based in Lagos, Nigeria
->>>>>>> 718354cca514c6a29e269e0e901f90650d66f79f
 
EOF
)