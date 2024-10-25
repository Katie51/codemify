function compareAge(name,age){
    if (age > 25){
        return `${name} is older than me.`;
    }
    else {
        return `${name} is younger than me.`;
    }
}
console.log(compareAge("Joel", 36)) // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 24)) // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 28)) // ➞ "Lily is oder than me."