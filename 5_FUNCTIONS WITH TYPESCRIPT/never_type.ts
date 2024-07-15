// 9 - Never type

function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

showErrorMessage("Error!")