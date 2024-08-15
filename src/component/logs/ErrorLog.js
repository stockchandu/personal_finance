import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';


const ErrorLogSystem = () => {
  const [errorLogs, setErrorLogs] = useState([]);



//   const fetchErrorLogs = async () => {
//     try {
//       const { data, error } = await db
//         .from('logs') // Replace 'logs' with your actual Supabase table name
//         .select('*')
//         .eq('type', 'error') // Assuming you have a 'type' field to filter by error logs
//         .order('created_at', { ascending: false });

//       if (error) {
//         throw error;
//       }

//       if (data) {
//         setErrorLogs(data);
//       }
//     } catch (error) {
//       console.error('Error fetching logs:', error.message);
//     }
//   };
const fetchErrorLogs =  () => {
    // Dummy data simulating error logs from a database
    const dummyData = [
        {
          id: 1,
          message: 'Failed to connect to database.',
          operation: 'Database Connection',
          dispatch: 'Initial Data Load',
          created_at: new Date().toISOString(),
        },
        {
          id: 2,
          message: 'User authentication failed.',
          operation: 'Authentication',
          dispatch: 'Login Attempt',
          created_at: new Date().toISOString(),
        },
        {
          id: 3,
          message: 'Unexpected error occurred while processing request.',
          operation: 'Request Handling',
          dispatch: 'Form Submission',
          created_at: new Date().toISOString(),
        },
      ];

    // Simulate a delay to mimic an async operation
    setTimeout(() => {
      setErrorLogs(dummyData);
    }, 500); // 500ms delay to simulate fetching
  };

  useEffect(() => {
    fetchErrorLogs();
  }, []);

  return (
    <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#000', color: '#fff', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Error Logs
      </Typography>
      {errorLogs.length === 0 ? (
        <Typography>No error logs available.</Typography>
      ) : (
        errorLogs.map((log) => (
          <Box key={log.id} sx={{ marginBottom: 2, padding: 1, borderBottom: '1px solid #555' }}>
            <Typography variant="body1"><strong>Message:</strong> {log.message}</Typography>
            <Typography variant="body2"><strong>Operation:</strong> {log.operation}</Typography>
            <Typography variant="body2"><strong>Dispatch:</strong> {log.dispatch}</Typography>
            <Typography variant="caption"><strong>Created At:</strong> {new Date(log.created_at).toLocaleString()}</Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ErrorLogSystem;
