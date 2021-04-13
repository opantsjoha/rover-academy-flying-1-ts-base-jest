export class Rover {
    coordinates: { X: number, Y: number };
    direction: string;
    directionMap: Record<Direction, any> = {
        'L':{
            'N':'W',
            'W':'S',
            'S':'E',
            'E':'N',
        },
        'R':{
            'N':'E',
            'E':'S',
            'S':'W',
            'W':'N',
        }
    }

    constructor(){
        this.coordinates = {X: 0, Y: 0};
        this.direction = 'N';
    }

    move(commands: string){
        commands.split('').forEach(command=>this.processCommand(command as Direction))
        return `${this.coordinates.X}:${this.coordinates.Y}:${this.direction}`
    }

    processCommand = (command: Direction | 'M') => {
        if (command === 'M') {
            this.coordinates.Y++;
        }
        else this.direction = this.directionMap[command][this.direction]
    }
}


type Direction = 'L' | 'R';