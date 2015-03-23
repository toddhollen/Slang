    //Question Array
        
    currentQuestionNum = 0;

    questions = [{
        question: "Bucket/Lid",
        choices: ["Helmet", "The Goal", "The Bench", "The Rink"],
        qNum : 0,
        correct : 0,
        correctImage : ["assets/images/gameanswers/helmet.gif"],
        correctDescription: 'Strap on your bucket so you don\'t scramble your brains.'
        },
        {
        question: "Blades",
        choices: ["Zamboni","Skates", "Stick", "Hockey Groupies"],
        qNum : 1,
        correct : 1,
        correctImage : ["assets/images/gameanswers/skates.gif"],
        correctDescription:'Tie on your blades and let\'s hit the ice.'
        },
        {
        question: "Beauty",
        choices: ["Hockey Groupie", "A sick goalie mask", "An impressive play OR a player that’s talented both on the ice and off.", "Freshly Zambonied Ice" ],
        qNum : 2,
        correct : 2,
        correctImage : ["assets/images/gameanswers/beauty.gif"],
        correctDescription:'That spin-0-rama was a real beauty. <br><br>That guy has sick flow and greasy hands, he is a beauty.'
        },
        {
        question: "Flow",
        choices: ["Great skating technique", "Momentum during a game", "Beers in the parking lot after the game", "Great hockey hair, typically long that flows out of the helmet when the player skates."],
        qNum : 3,
        correct : 3,
        correctImage : ["assets/images/gameanswers/flow.gif"],
        correctDescription:'Check out that beauty\'s flow.' 
        },
        {
        question: "Greasy",
        choices: ["A bad player","Awesome moves or hands", "Barry Melrose's hair", "A freshly waxed stick"],
        qNum : 4,
        correct : 1,
        correctImage : ["assets/images/gameanswers/greasy.gif"],
        correctDescription:'Did you see that penelty shot? That guy is greasy! <br><br>(Also, yes, Melrose\'s hair is greasy. And sick flow. But that isn\'t the answer we were looking for.)'
        },
        {
        question: "Gongshow",
        choices: ["Between period entertainment","A complete mess of a game or the shenanigans that take place after the game.", "When someone scores two hat tricks.", "A fight"],
        qNum : 5,
        correct : 1,
        correctImage : ["assets/images/gameanswers/gongshow1.gif"],
        correctDescription:'That game/party was a gongshow! Where did that donkey come from?'
        },
        {
        question: "Dangle/Deke",
        choices: ["When a player forgets to wear a cup.", "A big save", "A great pass", "A variety of moves where a player fakes out a goalie or player"],
        qNum : 6,
        correct : 3,
        correctImage : ["assets/images/gameanswers/deke.gif"],
        correctDescription:'That was a beauty dangle. I call it the \'Triple Deke.\' <br><br>(Not to be confused with a "dangler," which is the plastic throat guard some goalies attach to their buckets.)'
        },
        {
        question: "Pillows",
        choices: ["Goalie Leg Pads", "Gloves", "The padding that goes around the inside of the goal.", "Padding in the helmet."],
        qNum : 7,
        correct : 0,
        correctImage : ["assets/images/gameanswers/pillows.gif"],
        correctDescription:'A big save off the pillows!'
        },
        {
        question: "Twig",
        choices: ["The boards", "A skinny player", "A weak hit in a fight.", "A hockey stick"],
        qNum : 8,
        correct : 3,
        correctImage : ["assets/images/gameanswers/twig.gif"],
        correctDescription:'Look at the flex in his twig when he took that clapper!'
        },
        {
        question: "Where Grandma Keeps the Peanut Butter",
        choices: ["A goal scored in the top part of the net.", "A goalie's 5-hole (between his legs)", "A glove save", "The bench"],
        qNum : 9,
        correct : 0,
        correctImage : ["assets/images/gameanswers/grandma.gif"],
        correctDescription:'She put that one top shelf, where grandma keeps the peanut butter!'
        },
        {
        question: "Chirp",
        choices: ["A cheap hit", "The sound skates make when you stop.", "Trash talking", "A check"],
        qNum : 10,
        correct : 2,
        correctImage : ["assets/images/gameanswers/chirp.gif"],
        correctDescription:'If he keeps chirping the other team\'s goalie like that someone is going to lay him out.'
        },
        {
        question: "Donnybrook",
        choices: ["A hard hit", "A fight", "An old ice rink", "The team's equipment manager"],
        qNum : 11,
        correct : 1,
        correctImage : ["assets/images/gameanswers/donnybrook.gif"],
        correctDescription:'Haven\'t seen a donnybrook like that since Tie Domi and Bob Probert in \'92!'
        },
        {
        question: "Goon",
        choices: ["A dumb player", "The referee", "A fan who get's too drunk.", "A team's enforcer/ a person whose primary role is to fight to protect his teammates"],
        qNum : 12,
        correct : 3,
        correctImage : ["assets/images/gameanswers/goon.gif"],
        correctDescription:'The goons are going at it after a missed call on a cheap hit.'
        },
        {
        question: "Bender/ Duster/ Pylon",
        choices: ["A low skilled player", "A high skilled player", "A player who chirps a lot.", "The team's equipment manager"],
        qNum : 13,
        correct : 0,
        correctImage : ["assets/images/gameanswers/bender.gif"],
        correctDescription:'Look at this guy, what a duster. <br<br>Bender=Someone whose ankles bend in when he or she skates. <br>Duster=Someone who collects dust sitting on the bench. <br>Pylon= Someone so slow everyone just skates right around him or her.'
        },
        {
        question: "Bunny/Puck Bunny/Puck",
        choices: ["Team mascot", "Good luck charm","A (usually derogatory) term for a hockey groupie", "Zamboni driver"],
        qNum : 14,
        correct : 2,
        correctImage : ["assets/images/gameanswers/bunny.jpg"],
        correctDescription:'That puck bunny has dated the whole team. <br><br> (Note: Just because a girl likes to play or watch hockey doesn\'t make her a bunny.)'
        },
        {
        question: "Biscuit",
        choices: ["A bad player", "The puck", "An equipment deodorizer", "Goalie treat"],
        qNum : 15,
        correct : 1,
        correctImage : ["assets/images/gameanswers/puck.gif"],
        correctDescription:'Sauce the biscuit!'
        },
        {
        question: "Clapper",
        choices: ["An enthusiastic fan", "A slapshot/very hard shot", "Team captain", "Coach"],
        qNum : 16,
        correct : 1,
        correctImage : ["assets/images/gameanswers/clapper.gif"],
        correctDescription:'Bet his ears are ringing after taking that clapper to the bucket.'
        },
        {
        question: "Bar Down",
        choices: ["Drinking after the game", "Hustling during your shift", "Thoroughly beating a team.", "A shot that deflects into the net off of the crossbar."],
        qNum : 17,
        correct : 3,
        correctImage : ["assets/images/gameanswers/bardown.gif"],
        correctDescription:'She went bar down on that clapper!'
        },
        {
        question: "Barn",
        choices: ["Locker room", "Ice rink", "The goal", "A place to drink after the game."],
        qNum : 18,
        correct : 1,
        correctImage : ["assets/images/gameanswers/barn.jpeg"],
        correctDescription:'Goin\' down to the barn to play some hockey.' 
        },
        {
        question: "Celly",
        choices: ["A celebration after a goal", "A jersey", "The Zamboni", "Stick tape"],
        qNum : 19,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'He topped off that beauty goal with a sweet celly.'
        },
        {
        question: "The Show",
        choices: ["SportsCenter", "A big game", "The NHL", "A top player"],
        qNum : 20,
        correct : 2,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'Every hockey player dreams of going to the The Show.'
        },
        {
        question: "Sauce",
        choices: ["Beer", "A pass that goes through the air and hits the ice right before hitting the teammate\'s stick tape.", "A great goal", "A fast skater"],
        qNum : 21,
        correct : 1,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'He put it where grandma puts the peanut butter after a greasy sauce from winger.'
        },
        {
        question: "Sieve",
        choices: ["A bad goalie", "The netting on the goal", "The Zamboni", "The coach"],
        qNum : 22,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'That sieve is so full of holes; he lets everything in.'
        },
        {
        question: "Snipe",
        choices: ["A great pass", "A big hit", "A player that hangs out at center ice waiting for a breakaway pass.", "A well placed shot that results in a goal."],
        qNum : 23,
        correct : 3,
        correctImage : ["assets/images/gameanswers/snipe.gif"],
        correctDescription:'He snipped that beauty bar down. Made the goalie into a real sieve.'
        },
        {
        question: "Gordie Howe Hat Trick",
        choices: ["Three Goals", "A goal, an assist, and fight in one game", "Three assists", "Three beers"],
        qNum : 24,
        correct : 1,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'With a Gordie Howe Hat Trick, that beauty had a great game.'
        },
        ]

        //Global Variables
        var numberCorrect = 0;
        var currentQuestionData = questions[currentQuestionNum];
    

    // Intro Screen - Click to Start
    var getCurrentQuestionData = function(questions, currentQuestionNum){
        return questions[currentQuestionNum];
    }

    // Setting functions outside of document ready
       function showCurrentquestion(currentQuestionData){

        //step 1: Clear Template
        $('h4.slang').html("");

        // Clear 4 terms in class "choices"
        $('.button1').text(" ");
        $('.button2').text(" ");
        $('.button3').text(" ");
        $('.button4').text(" ");

        //step 2: populate template

        $('h4.slang').html(currentQuestionData.question);

        // Load first 4 terms into class "choices"
        $('.button1').append(currentQuestionData.choices[0]);
        $('.button2').append(currentQuestionData.choices[1]);
        $('.button3').append(currentQuestionData.choices[2]);
        $('.button4').append(currentQuestionData.choices[3]);

    }

$(document).ready(function() {
    
    $(".start").click(function(event){
        event.preventDefault();
        $("#game").show("slow");
        $("#intro").hide("slow");
        showCurrentquestion(currentQuestionData); 
    });

    $(".return").click(function(event){
        event.preventDefault();

        // Bring in UI for Game
        $("#game").show("slow");
        $("#answer").hide("slow");

        // Clear out original responses
        $(".correct, .incorrect").hide();
        $('.correct-ans').text(" ");
        $(".correct-image").attr('src', '');
        $(".correct-description").text(" ");
       
   

        // Get Data to display
        var cqd = getCurrentQuestionData(questions, currentQuestionNum);
 		
        // Display Data
        if (currentQuestionNum == questions.length){ 
            //    show end of game screen
            $("#answer, .correct, .incorrect, #game").hide();
            $("#end").show("slow");
            $('.number').append(numberCorrect);
            $('.outof').append(currentQuestionNum);
            $(".tweet").attr( "href", "https://twitter.com/intent/tweet?text=I%20got%20"+numberCorrect+"%20out%20of%20"+currentQuestionNum+"%20referee%20calls%20correct!%20How%20many%20can%20you%20get%3F%20http%3A%2F%2Fgoo.gl%2FhiIdXJ%20via%20%40BandBhockey%20%23hockey");
        } else {
            showCurrentquestion(cqd);
        }
});
    
    $('.choices a').on('click', function(event){
        //stops us from going to outgoing link
        event.preventDefault();
        var currentItem;
         if(event.target.nodeName == 'A'){
            currentItem = event.target;
            } else if(event.target.nodeName == 'BUTTON'){
            currentItem = $(event.target).parent();
            } 

        //Get the index number of clicked answer
        var index = $(".choices a").index(currentItem);
        var cqd = getCurrentQuestionData(questions, currentQuestionNum);

        var correct = cqd.correct;
        var correctImage = cqd.correctImage;
        var description = cqd.correctDescription;

            if (index == correct) {
                $("#answer, .correct").show("slow");
                $('.correct-ans').append(cqd.choices[correct]);
                $(".correct-image").attr('src', cqd.correctImage);
                $(".correct-description").append(cqd.correctDescription);
                $("#game").hide("slow"); 
                numberCorrect++; 
                ++currentQuestionNum;
                
            } else {
                $("#answer, .incorrect").show("slow");
                $('.correct-ans').append(cqd.choices[correct]);
                $(".correct-image").attr('src', cqd.correctImage);
                $(".correct-description").append(cqd.correctDescription);
                $("#game").hide("slow"); 
                ++currentQuestionNum;
            }
    });

    $('.exit').on('click', function(event) {
        event.preventDefault();
        $("#answer, .correct, .incorrect, #game").hide();
            $("#end").show("slow");
            $('.number').append(numberCorrect);
            $('.outof').append(currentQuestionNum);
            $(".tweet").attr( "href", "https://twitter.com/intent/tweet?text=I%20got%20"+numberCorrect+"%20out%20of%20"+currentQuestionNum+"%20referee%20calls%20correct!%20How%20many%20can%20you%20get%3F%20http%3A%2F%2Fgoo.gl%2FhiIdXJ%20via%20%40BandBhockey%20%23hockey");
    });

});