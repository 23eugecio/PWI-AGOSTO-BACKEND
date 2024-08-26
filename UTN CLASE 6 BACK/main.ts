class User {
    id: number;
    description: string;
    date: number;
    constructor(id: number, description: string, date: number) {
        this.id = id;
        this.description = description;
        this.date = date;
    }
}

class AppHistory extends User {
    constructor(id: number, description: string, date: number) {
        super(id, description, date);
    }
}

class UserHistory {
    user: AppHistory[];
    id: number;
    constructor() {
        this.user = [];
        this.id = 0;
    }
}

class Action {
    user: AppHistory[];
    id: number;
    constructor(id: number, user: AppHistory[]) {
        this.id = id;
        this.user = user;
    }
    
    addNewAction(action: AppHistory) {
        this.user.push(action);
    }

    deleteActionById(id: number) {
        this.user = this.user.filter(action => action.id !== id);
    }

    deleteAllActions() {
        this.user = [];
    }

    showHistory() {
        console.log(this.user);
    }
}
