// wagePerHour -> STATIS
// overtimeWagePerHour -> STATIS
// workingHours -> DINAMIS

// Specifications :
// Create a program to calculate total salary based on employee type
// There are two types of employee : full-time & part-time
// Salary for full-time employee :
// IDR 100.000 / hour
// IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// Salary for part-time employee :
// IDR 50.000 / hour
// IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// Requirements :
// Create an Employee as a parent class
// Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// Create a method in that class to add working hour per day
// Create a method in that class to calculate total salary
// Use inheritance concept

// 2 methods

class Employee {
    wagePerHour = 0
    overtimeWagePerHour = 0
    workingHours = 0

    addWorkingHours = (newWorkingHours) => {
        if (newWorkingHours < 1) {
            throw new Error("Working hours harus lebih dari 0")
        }

        this.workingHours += newWorkingHours
    }

    calculateTotalSalary = () => {
        if (this.workingHours <= 6) {
            // 1. Tanpa lembur
            return this.workingHours * this.wagePerHour
        }

        // 2. Dengan lembur
        return (
            this.wagePerHour * 6 +
            this.overtimeWagePerHour * (this.workingHours - 6)
        )
    }

    setWagePerHour = (newWagePerHour) => {
        this.wagePerHour = newWagePerHour
    }

    setOvertimeWagePerHour = (newOvertimeWagePerHour) => {
        this.overtimeWagePerHour = newOvertimeWagePerHour
    }
}

class FullTimeEmployee extends Employee {
    wagePerHour = 100000
    overtimeWagePerHour = 75000
}

class PartTimeEmployee extends Employee {
    wagePerHour = 50000
    overtimeWagePerHour = 30000
}


// const fullTime = new FullTimeEmployee()

// fullTime.addWorkingHours(3)
// fullTime.addWorkingHours(4)

const partTime = new PartTimeEmployee()

partTime.addWorkingHours(3)
partTime.addWorkingHours(4)

console.log(partTime.calculateTotalSalary())