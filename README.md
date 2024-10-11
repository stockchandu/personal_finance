# Personal Finance Management Application

A personal finance application that helps users manage their net worth, liabilities, savings, investments, and insurance. Users can add, update, and track financial data through an intuitive dashboard, enabling personalized financial planning.

![image](https://github.com/user-attachments/assets/f9af4975-56a1-4a32-8409-795fb8b83d12)
![image](https://github.com/user-attachments/assets/aa0cd84f-7c2d-4fe9-a648-3e5d0f77ef81)
![image](https://github.com/user-attachments/assets/16c2be56-3d25-4b53-82f8-ab2800d386eb)
![image](https://github.com/user-attachments/assets/6100dc76-d749-4aae-8215-7dff65e73a61)
![image](https://github.com/user-attachments/assets/a95d66ea-472d-4858-9d49-013b57929baf)





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
