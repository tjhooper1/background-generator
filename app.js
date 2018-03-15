async function playerStart () {  
    const firstMove = await movePlayer(100, 'Left');
    await movePlayer(400, 'Right');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left');
    await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}