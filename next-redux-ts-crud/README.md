src/
├── components/               # React components for the UI
│   ├── CreateItem.tsx        # Form for creating items (POST)
│   ├── DeleteItem.tsx        # Button for deleting items (DELETE)
│   ├── ItemList.tsx          # Displays the list of items (GET)
│   ├── UpdateItem.tsx        # Form for updating items (PUT)
│
├── state/                    # Redux-related files
│   ├── api.ts                # RTK Query API (CRUD endpoints)
│   ├── index.ts              # Store setup and middleware
│   ├── globalSlice.ts        # Example global slice (optional)
│
├── pages/                    # Pages directory for Next.js
│   ├── _app.tsx              # The main App component that integrates Redux store
│   ├── index.tsx             # The homepage that displays the item list
│
└── styles/                   # Styles directory for global styles
    └── globals.css           # Global styles for the app
