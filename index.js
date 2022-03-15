function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function goof() {
    }
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}