var tableauBlaguesDeMerde = [
  'Quel est le comble pour une maman poux ? C\'est d\'être lente...',
  'Comment s\'appelle une colle avec une cape ? De la super glue...',
  'Pourquoi Microsoft sera toujours au dessus d\'Apple ?  Parce que Microsoft excelle ! ',
  'Qu\'est-ce qu\'un buisson au bord de la route ?  Une portugaise qui fait du stop !',
  'J\'ai raconté une blague à un parisien, il a pas ris.',
  'J\'ai essayé la veste de Gad et elle m\'allait !',
  'C\'est l\'histoire d\'un poil avant il etait bien maintenant il est pubien',
  'Quel super héros donne le plus vite l\'heure ? Speed heure man ! '
];

function getBlagueAuHasard() {
    var tailleTableauBlagues = tableauBlaguesDeMerde.length;
    var indiceBlague = Math.floor((Math.random()) * tailleTableauBlagues);

    return tableauBlaguesDeMerde[indiceBlague];
}

function ajouterBlague(nouvelleBlague) {
    tableauBlaguesDeMerde.push(nouvelleBlague);
}

function getBlagues() {
   return tableauBlaguesDeMerde;
}

exports.getBlagueAuHasard = getBlagueAuHasard;
exports.ajouterBlague = ajouterBlague;
exports.getBlagues = getBlagues;
