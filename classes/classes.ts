class User {
    private name: string; // Private: No puedes accionar poniendo User1.name, queremos getters/setters.
    private nickname: string;
    private age: number;
    private role: string;

    constructor(name: string, nickname: string, age: number, role: string) {
        this.name = name;
        this.nickname = nickname;
        this.age = age;
        this.role = role;
    }

    /**
     * # Getters
     * User data
     * Return user name
     * @return string - User name
     */
    getName(): string {
        return this.name;
    }

    /**
     * Return if the user has enough permission
     * @return boolean - Has permission
     */
    hasPerms(): boolean {
        let value: boolean = false;

        switch (this.role) {
            case 'ADMIN': {
                value = true
                break;
            }
        }

        return value;
    }

    /**
     * # Setters
     * User data
     * Change user name
     * @return string - User name
     */
    changeName(name: string) {
        this.name = name;
    }
}

const User1 = new User('Javi', 'NickBlade', 16, 'ADMIN');

console.log(User1.hasPerms())

