import React from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography
} from "@mui/material";
import {AccountCircleOutlined} from "@mui/icons-material";
import userService from "../app/services/userService";
import {LoginModel} from "../app/models/loginModel";
import commonService from "../app/services/commonService";
import {toast} from "react-toastify";

export default function LoginComponent() {
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            username: data.get('username'),
            password: data.get('password'),
        });

        const username = data.get('username');
        const password = data.get('password');

        if (!username || !password) {
            toast.error('Please complete all fields');
            return;
        }

        var loginModel: LoginModel = {
            username: data.get('username')!.toString(),
            password: data.get('password')!.toString()
        }

        try {
            userService.login(loginModel).then(() => {
                if (commonService.getToken()) {
                    // Close modal
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AccountCircleOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}