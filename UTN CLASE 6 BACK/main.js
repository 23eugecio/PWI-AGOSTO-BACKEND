"use strict";
class User {
    constructor(id, description, date) {
        this.id = id;
        this.description = description;
        this.date = date;
    }
}
class AppHistory extends User {
    constructor(id, description, date) {
        super(id, description, date);
        this.id = id;
    }
}
class UserHistory {
    constructor() {
        this.user = [];
        this.id = 0;
    }
}
class Action {
    constructor(id, user) {
        this.id = id;
        this.user = [];
    }
    addNewAction(action) {
        this.user.push(action);
    }
    deleteActionById(id) {
        this.user = this.user.filter(action => action.id !== id);
    }
    deleteAllAction() {
        this.user = [];
    }
    showHistory() {
        console.log(this.user);
    }
}
