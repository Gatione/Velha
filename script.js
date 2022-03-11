let cells = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const placar = document.getElementById('placar')
const reset = document.getElementById('reset')
const buttons = document.getElementsByClassName('cell')

reset.addEventListener('click', function (){
    resetAll()
})


function resetAll(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = ''
    }

    cells =  [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
}

let countTurn = 0
let vitorias1 = 0
let vitorias2 = 0

function vitorias(player){
    if(player === 'X'){
        vitorias1++
    }
    if(player === 'O'){
        vitorias2++
    }
}

function turn(){
    countTurn ++
    return countTurn % 2 === 0 ? 2 : 1
}

function final(player){
    alert(`Vitória do player ${player}`)
    vitorias(player)
    resetAll()
    placar.innerHTML = `<p>Vitórias de 'X': ${vitorias1}</p>
    <p>Vitórias de 'O': ${vitorias2}</p>`
    
}


function selectCell(x, y){
    
    
    if(cells[x][y] === 0){
    cells[x][y] = turn()
    let celulaAtual = document.getElementById(`${x}, ${y}`);
    let playerAtual = countTurn % 2 === 0 ? 'X' : 'O'
    celulaAtual.innerText = playerAtual
    
    
    setTimeout(() => {
        if (cells[1][1] !== 0){
            if (cells[0][0] === cells[1][1] && cells[2][2] === cells[1][1]){
                return final(playerAtual)
            }
            if (cells[0][2] === cells[1][1] && cells[2][0] === cells[1][1]){
                return final(playerAtual)
            }
            if (cells[0][1] === cells[1][1] && cells[2][1] === cells[1][1]){
                return final(playerAtual)
            }
            if (cells[1][0] === cells[1][1] && cells[1][2] === cells[1][1]){
                return final(playerAtual)
            }
        }
        if(cells[0][0] !== 0){
            if (cells[0][1] === cells[0][0] && cells[0][2] === cells[0][0]){
                return final(playerAtual)
            }
            if (cells[1][0] === cells[0][0] && cells[2][0] === cells[0][0]){
                return final(playerAtual)
            }
        }
        if(cells[2][2] !== 0){
            if (cells[0][2] === cells[2][2] && cells[1][2] === cells[2][2]){
                return final(playerAtual)
            }
            if (cells[2][0] === cells[2][2] && cells[2][1] === cells[2][2]){
                return final(playerAtual)
            }
        }
        let vazio = 0
        for (let i = 0; i < cells.length; i++) {
            cells[i].includes(0) ? vazio : vazio++
            
            if(vazio === 3){
                alert('Empate')
                resetAll()
            }
        }
        console.table(cells)
    }, 200)
    }
    return cells
}
