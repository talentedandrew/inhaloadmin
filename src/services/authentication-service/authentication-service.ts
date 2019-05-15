export class AuthenticationService {
    public login = (loginDetails: any) => {
        return new Promise((resolve) => {
            localStorage.setItem('auth', JSON.stringify(loginDetails))
            if (loginDetails.email === 'admin@admin.com') {
                loginDetails.redirectToReferrer = true;
                resolve(loginDetails);
            }
            resolve(loginDetails);
        });
    }

    public logOut = () => {
        return new Promise((resolve) => {
            localStorage.clear();
            resolve();
        });
    }
}

