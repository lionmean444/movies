export interface IPlayer{
    TeamId: number;
    TeamName: string;
    UserId: number;
    FirstName: string;
    LastName: string;
    Position: string
    PositionRank: number;
    UserPhoto: string;
}


export class Player implements IPlayer {
  
    constructor(public TeamId: number,
        public TeamName: string,
        public UserId: number,
        public FirstName: string,
        public LastName: string,
        public Position: string,
        public PositionRank: number,
        public UserPhoto: string) { }
    
    
}