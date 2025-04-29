import UsersList from "../Components/UsersList";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const UsersPage = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <UsersList />        
        </QueryClientProvider>
    );
}

export default UsersPage;