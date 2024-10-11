# Personal Finance Management Application

A personal finance application that helps users manage their net worth, liabilities, savings, investments, and insurance. Users can add, update, and track financial data through an intuitive dashboard, enabling personalized financial planning.

## Requirements

- **Track financial data**: Users can manage their net worth, liabilities, savings, investments, and insurance details.
- **CRUD operations**: Ability to add, edit, delete, and update financial entries.
- **Personalized money rules**: Users can create custom financial strategies.
- **Document management**: Store and manage vehicle details, insurance documents, and other financial records.

## Scoping & Prioritization

1. **Dashboard**: Build a responsive and easy-to-use dashboard for financial insights.
2. **CRUD Functionality**: Implement add, edit, delete, and update features for financial entries.
3. **Money Rules**: Allow users to define and manage personal financial rules.
4. **Document Storage**: Enable users to store and retrieve important financial documents.
5. **Supabase Integration**: Use Supabase for secure data storage and API management.

## Tech Stack

- **Frontend**: React.js
- **State Management**: Redux
- **Backend**: Supabase (PostgreSQL-based backend as a service)
- **Styling**: Material UI (MUI)
- **Version Control**: Git

## Component Architecture

- **Sidebar Navigation**: Displays sections such as Overview, Liabilities, Money Inflows/Outflows, Savings, Investments, Insurance, Vehicle Details, and Money Rules.
- **Dashboard Component**: Centralized view showing key financial insights and summaries.
- **CRUD Components**: Modular components for managing financial data (Add/Edit/Delete forms).
- **Money Rules Component**: Provides an interface for users to create and manage their financial strategies.
- **Document Management**: Allows uploading and viewing documents, such as insurance or vehicle details.

## Data API & Implementation

- **Supabase**: 
  - Acts as the backend database and API layer.
  - Manages CRUD operations for financial data.
  - Securely stores user data, including sensitive financial information.
  - Real-time synchronization to keep data up-to-date across devices.

## How to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/personal-finance-app.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up your Supabase instance:
    - Create a Supabase project [here](https://supabase.com/).
    - Get the API keys and set them in your `.env` file.
4. Start the development server:
    ```bash
    npm start
    ```

5. Visit the app at `http://localhost:3000`.
