export class UserService {
    public isAuthorised = () => {
        return new Promise((resolve, reject) => {
            const user = JSON.parse(localStorage.getItem('auth')!);
            if (user.email === 'admin@admin.com') {
                resolve();
            }
            reject()
        });
    }
}

