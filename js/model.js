var game_tags = {

	"type" : [{name :'Board game',	selected: 'false'},
				{name: 'Card game',	selected: 'false'},
				{name: 'Dice game',	selected: 'false'},
				{name: 'Miniature waregame',		selected: 'false'},
				{name: 'Paper & pencil',		selected: 'false'},
				{name: 'Tile based',		selected: 'false'}],
	"themes" : [
  {
    "name":"Rail / Network",
    "selected":"false"
  },
  {
    "name":"Economic simulation",
    "selected":"false"
  },
  {
    "name":"Environmental",
    "selected":"false"
  },
  {
    "name":"Educational",
    "selected":"false"
  },
  {
    "name":"Wargame",
    "selected":"false"
  },
  {
    "name":"Fantasy",
    "selected":"false"
  },
  {
    "name":"Historical",
    "selected":"false"
  },
  {
    "name":"Pre-historic",
    "selected":"false"
  },
  {
    "name":"Ancient",
    "selected":"false"
  },
  {
    "name":"Medieval",
    "selected":"false"
  },
  {
    "name":"20th century",
    "selected":"false"
  },
  {
    "name":"Renaissance",
    "selected":"false"
  },
  {
    "name":"Murder / mistery",
    "selected":"false"
  },
  {
    "name":"Horror",
    "selected":"false"
  },
  {
    "name":"Religion",
    "selected":"false"
  },
  {
    "name":"Mythology",
    "selected":"false"
  },
  {
    "name":"Pirates",
    "selected":"false"
  },
  {
    "name":"Science fiction",
    "selected":"false"
  },
  {
    "name":"Space exploration",
    "selected":"false"
  },
  {
    "name":"Zombies",
    "selected":"false"
  },
  {
    "name":"Multiple time periods",
    "selected":"false"
  },
  {
    "name":"Agricol",
    "selected":"false"
  },
  {
    "name":"Civilization",
    "selected":"false"
  },
  {
    "name":"Jungle",
    "selected":"false"
  },
  {
    "name":"abstract",
    "selected":"false"
  }
],
	"categories" : [
  {
    "name":"Adventure",
    "selected":"false"
  },
  {
    "name":"Strategy",
    "selected":"false"
  },
  {
    "name":"Race game",
    "selected":"false"
  },
  {
    "name":"Diplomacy",
    "selected":"false"
  },
  {
    "name":"Exploration",
    "selected":"false"
  },
  {
    "name":"Party game",
    "selected":"false"
  },
  {
    "name":"Word game",
    "selected":"false"
  },
  {
    "name":"Drinking game",
    "selected":"false"
  },
  {
    "name":"Family game",
    "selected":"false"
  },
  {
    "name":"Children game",
    "selected":"false"
  },
  {
    "name":"Print and play",
    "selected":"false"
  }
],
	"mechanics" : [
  {
    "name":"Area movement",
    "selected":"false"
  },
  {
    "name":"Grid movement",
    "selected":"false"
  },
  {
    "name":"Line drawing",
    "selected":"false"
  },
  {
    "name":"Modular board",
    "selected":"false"
  },
  {
    "name":"Point to point movement",
    "selected":"false"
  },
  {
    "name":"Roll and move",
    "selected":"false"
  },
  {
    "name":"Route / Network Building",
    "selected":"false"
  },
  {
    "name":"Secret unit deployment",
    "selected":"false"
  },
  {
    "name":"Tile placement",
    "selected":"false"
  },
  {
    "name":"Worker placement",
    "selected":"false"
  },
  {
    "name":"Action programming",
    "selected":"false"
  },
  {
    "name":"Auction / bidding",
    "selected":"false"
  },
  {
    "name":"Campaign ",
    "selected":"false"
  },
  {
    "name":"Betting / Wagering",
    "selected":"false"
  },
  {
    "name":"Cooperative",
    "selected":"false"
  },
  {
    "name":"Dice rolling",
    "selected":"false"
  },
  {
    "name":"Deck building",
    "selected":"false"
  },
  {
    "name":"Hand management",
    "selected":"false"
  },
  {
    "name":"Partnerships",
    "selected":"false"
  },
  {
    "name":"Pattern building",
    "selected":"false"
  },
  {
    "name":"Pattern recognition",
    "selected":"false"
  },
  {
    "name":"Player elimination",
    "selected":"false"
  },
  {
    "name":"Press your luck",
    "selected":"false"
  },
  {
    "name":"RPG",
    "selected":"false"
  },
  {
    "name":"Trading",
    "selected":"false"
  },
  {
    "name":"Trick-taking",
    "selected":"false"
  },
  {
    "name":"Voting",
    "selected":"false"
  },
  {
    "name":"Collectible components",
    "selected":"false"
  },
  {
    "name":"Abstract strategy",
    "selected":"false"
  },
  {
    "name":"Shedding",
    "selected":"false"
  },
  {
    "name":"Accumulating ",
    "selected":"false"
  },
  {
    "name":"Comparing",
    "selected":"false"
  },
  {
    "name":"Card drafting",
    "selected":"false"
  },
  {
    "name":"Living card game",
    "selected":"false"
  },
  {
    "name":"Deduction",
    "selected":"false"
  },
  {
    "name":"Storytelling",
    "selected":"false"
  },
  {
    "name":"Memory",
    "selected":"false"
  },
  {
    "name":"Matching",
    "selected":"false"
  },
  {
    "name":"Acting",
    "selected":"false"
  },
  {
    "name":"Negotiation",
    "selected":"false"
  },
  {
    "name":"Bluffing",
    "selected":"false"
  },
  {
    "name":"Dexterity",
    "selected":"false"
  },
  {
    "name":"Trivia",
    "selected":"false"
  },
  {
    "name":"Area control",
    "selected":"false"
  }
]
};

var tagsToShow = 3;

var questions = [

{   "question" : "based in a fantasy world?", 
    "tags" : ["Fantasy","Mythology"]
},

{   "question" : "about building/managing trains?", 
  "tags" : ["Rail / Network"]
},

{   "question" :"about managing resources such as money?", 
    "tags" : ["Economic simulation"]
},

{   "question" : "about environmental catastrophes?",
    "tags" : ["Environmental"]
},

{   "question" : "that is educational?",
    "tags" : ["Educational"]
},

{   "question" : "that simulates war?",
  "tags" : ["Wargame"]
},

{   "question" : "based on a particular historical period?",
  "tags" : ["Historical", "Medieval", "Ancient", "20th century", "Renaissance", "Civilization"]
},

{   "question" : "about an ancient, undiscovered world?",
  "tags" : ["Ancient", "Civilization"]
},

{   "question" : "about medieval Europe?",
    "tags" : ["Medieval"]
},

{   "question" : "set in the 20th century?",
  "tags" : ["20th century"]
},

{   "question" : "set in the renaissance",
  "tags" : ["Renaissance"]
},

{   "question" : "about murders and mystery?",
  "tags" : ["Murder / mistery"]
},

{   "question" : "about horror?",
  "tags" : ["Horror"]
},

{   "question" : "about religion?",
  "tags" : ["Religion"]
},

{   "question" : "that deals with mythology?",
  "tags" : ["Mythology"]
},
    
{   "question" : "about pirates?",
  "tags" : ["Pirates"]
},
    
{   "question" : "set in a world of science fiction?",
  "tags" : ["Science fiction", "Space exploration"]
},
    
{   "question" : "about exploring space?",   
    "tags" : ["Space exploration"]
},

{   "question" : "set in the future?",
  "tags" : ["Space exploration", "Science fiction"]
},

{   "question" : "about surviving a zombie apocalypse?",
  "tags" : ["Zombies"]
},

{   "question" : "that happens in several time periods?",    
    "tags" : ["Multiple time periods"]
},
    
{   "question" : "about agriculture?",
  "tags" : ["Agricol"]
},
    
{   "question" : "about building a civilization?",
  "tags" : ["Civilization"]
},
    
{   "question" : "that takes place in the jungle?",
  "tags" : ["Jungle"]
},

{   "question" : "that has no theme? Like chess or GO for example.",  
    "tags" : ["abstract"]
},

{   "question" : "that takes you on an adventure?",
  "tags" : ["Adventure"]
},
{   "question" : "where it is important to have a good strategy?",
  "tags" : ["Strategy"]
},
{   "question" : "that simulates a race?",
  "tags" : ["Race game"]
},
{   "question" : "about diplomacy tension?",
  "tags" : ["Diplomacy"]
},
{   "question" : "about exploration?",
  "tags" : ["Exploration"]
},
{   "question" : "for a party?",
  "tags" : ["Party game"]
},
{   "question" : "of words?",
  "tags" : ["Word game"]
},
{   "question" : "that gets people drinking?",
  "tags" : ["Drinking game"]
},
{   "question" : "suitable for the whole family?",
  "tags" : ["Family game"]
},
{   "question" : "suitable for children?",
  "tags" : ["Children game"]
},
{   "question" : "that you print yourself?",
  "tags" : ["Print and play"]
},
//====================================================

{   "question" : "where you have to take control of different areas in the board?",
  "tags" : ["Area movement"]
},
{   "question" : "where you move in a grid-like arrangement?",
  "tags" : ["Grid movement"]
},
{   "question" : "where you draw lines?",
  "tags" : ["Line drawing"]
},
{   "question" : "where the board is different every time you play it?",
  "tags" : ["Modular board"]
},
{   "question" : "where you are supposed to move from one point to another in the board?",
  "tags" : ["Point to point movement"]
},
{   "question" : "where you move according to a roll of the dice?",
  "tags" : ["Roll and move"]
},
{   "question" : "where you have to build connections between different places/points?",
  "tags" : ["Route / Network Building"]
},
{   "question" : "where you deploy your game pieces secretly?",
  "tags" : ["Secret unit deployment"]
},
{   "question" : "where you set down tiles throughout the game",
  "tags" : ["Tile placement"]
},
{   "question" : "where you have to send out your game pieces to 'work for you', and they get you different rewards?",
  "tags" : ["Worker placement"]
},
{   "question" : "where you have a set of actions that you have to play in a specific order?",
  "tags" : ["Action programming"]
},
{   "question" : "that is based on auction/bidding",
  "tags" : ["Auction / bidding"]
},
{   "question" : "that extends more than one playing session? Usually these sessions require the same players.",
  "tags" : ["Campaign "]
},
{   "question" : "where you need to bet?",
  "tags" : ["Betting / Wagering"]
},
{   "question" : "where you and your friends cooperate together and play against the game, instead of playing against each other?",
  "tags" : ["Cooperative"]
},
{   "question" : "where some actions depend on rolling dice?",
  "tags" : ["Dice rolling"]
},
{   "question" : "where you play with a deck of cards that you gradually build as the game progresses?",
  "tags" : ["Deck building"]
},
{   "question" : "where you need to manage the cards in your hand, to make certain actions?",
  "tags" : ["Hand management"]
},
{   "question" : "where you need to create alliances or partnerships?",
  "tags" : ["Partnerships"]
},
{   "question" : "where you need to build or find patterns?",
  "tags" : ["Pattern building","Pattern recognition"]
},
{   "question" : "where players are eliminated as the game goes by?", 
    "tags" : ["Player elimination"]
},
{   "question" : "where you rely on luck to carry out certain actions?",
  "tags" : ["Press your luck"]
},
{   "question" : "where you play a specific role in the development of a story/chronicle?",
  "tags" : ["RPG"]
},
{   "question" : "where you have to trade different game pieces between players?",
  "tags" : ["Trading"]
},
{   "question" : "about trick taking?", //OJO AQUI!!!!!!
    "tags" : ["Trick-taking"]
},
{   "question" : "based on a voting system?",
  "tags" : ["Voting"]
},
{   "question" : "that has collectible components?",
  "tags" : ["Collectible components"]
},
{   "question" : "that has no theme and is based on strategy?",
  "tags" : ["Abstract strategy"]
},
{   "question" : "where you have to get rid of gaming pieces as the game goes by",
  "tags" : ["Shedding"]
},
{   "question" : "about accumulating resources",
  "tags" : ["Accumulating "]
},
{   "question" : "about comparing your game pieces to other players?",
  "tags" : ["Comparing"]
},
{   "question" : "in which you are given a set of cards, you chose one, and pass the rest to the player on your right. Then you keep doing this for several times.",
  "tags" : ["Card drafting"]
},
{   "question" : "?????????????????",
  "tags" : ["Living card game"]
},
{   "question" : "about investigating and deducing characteristics from other players?",
  "tags" : ["Deduction"]
},
{   "question" : "where you have to tell a story or narration to your fellow gamers?",
  "tags" : ["Storytelling"]
},
{   "question" : "in which you have to use your memory?",
  "tags" : ["Memory"]
},
{   "question" : "in which you have to match elements within the game?",
  "tags" : ["Matching"]
},
{   "question" : "that requires you to act out scenes in front of your fellow gamers?",
  "tags" : ["Acting"]
},
{   "question" : "in which you have to negotiate terms within the game with the other players?",
  "tags" : ["Negotiation"]
},
{   "question" : "in which you have to bluff in order to win the game?",
  "tags" : ["Bluffing"]
},
{   "question" : "that requires your dexterity, such as balancing, fine moving, etc.",
  "tags" : ["Dexterity"]
},
{   "question" : "based on trivia?",
  "tags" : ["Trivia"]
},
{   "question" : "in which you are supposed to seize control of different areas of the game board?",
  "tags" : ["Area control"]
},

];
