    //Question Array
        
    currentQuestionNum = 0;

    questions = [{
        question: "Bucket/Lid",
        choices: ["Helmet", "The Goal", "The Bench", "The Rink"],
        qNum : 0,
        correct : 0,
        correctImage : ["assets/images/gameanswers/helmet.jpg"],
        correctDescription: 'Strap on your bucket so you don\'t scramble your brains.'
        },
        {
        question: "Blades",
        choices: ["Zamboni","Skates", "Stick", "Hockey Groupies"],
        qNum : 1,
        correct : 1,
        correctImage : ["assets/images/gameanswers/skates.jpg"],
        correctDescription:'Tie on your blades and let\'s hit the ice.'
        },
        {
        question: "Beauty",
        choices: ["Hockey Groupie", "A sick goalie mask", "An impressive play OR a player that’s talented both on the ice and off.", "Freshly Zambonied Ice" ],
        qNum : 2,
        correct : 2,
        correctImage : ["assets/images/gameanswers/beauty.jpg"],
        correctDescription:'That bar-down snipe was a real beauty. <br><br>That guy has sick flow and greasy hands, he is a beuaty.'
        },
        {
        question: "Flow",
        choices: ["Great skating technique", "Momentum durring a game", "Beers in the parking lot after the game", "Great hockey hair, typically long that flows out of the helmet when the player skates."],
        qNum : 3,
        correct : 3,
        correctImage : ["assets/images/gameanswers/flow.jpg"],
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
        choices: ["Between period entertainment","A complete mess of a game or the sheneigans that take place after the game.", "When someone scores a hat trick", "A fight"],
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
        correctImage : ["assets/images/gameanswers/dangle.gif"],
        correctDescription:'That was a beauty dangle. I call it the \'Tripple deke.\' <br><br>(Not to be confused with a "danlger," which is the plastic throat guard some goalies attach to their buckets.)'
        },
        {
        question: "Pillows",
        choices: ["Goalie Leg Pads"],
        qNum : 7,
        correct : 1,
        correctImage : ["assets/images/ameanswers/pillows.jpg"],
        correctDescription:'A big save off the pillows!'
        },
        {
        question: "Twig",
        choices: ["A hockey Stick"],
        qNum : 8,
        correct : 3,
        correctImage : ["assets/images/gameanswers/twig.gif"],
        correctDescription:''
        },
        {
        question: "Where Grandma Keeps the Peanut Butter",
        choices: ["A goal scored in the top part of the net."],
        qNum : 9,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'She put that one top shelf, where grandma keeps the peanut butter!'
        },
        {
        question: "Chirp",
        choices: ["Trash talking"],
        qNum : 10,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:''
        },
        {
        question: "Donnybrook",
        choices: ["A Fight"],
        qNum : 11,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:''
        },
        {
        question: "Goon",
        choices: ["A team's enforcer/ a person whose primary role is to fight to protect his teammates"],
        qNum : 12,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:''
        },
        {
        question: "Bender/ Duster/ Pylon",
        choices: ["A low skilled player"],
        qNum : 13,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'Look at this guy, what a duster. <br<br>Bender=Someone whose ankles bend in when he or she skates. <br> Duster=Someone who collects dust sitting on the bench. Pylon= Someone so slow everyone just skates right around him or her.'
        },
        {
        question: "Bunny/Puck Bunny/Puck",
        choices: ["A (usually derogotory) term for a hockey groupie"],
        qNum : 14,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'That puck bunny has dated the whole team. <br><br> (Note: Just because a girl likes to play or watch hockey doesn\'t make her a bunny.)'
        },
        {
        question: "Biscuit",
        choices: ["The Puck"],
        qNum : 15,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'Dish the biscuit!'
        },
        {
        question: "Clapper",
        choices: ["A slapshot/very hard shot"],
        qNum : 16,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'Bet his ears are ringing after taking that clapper to the bucket.'
        },
        {
        question: "Bar Down",
        choices: ["A shot that deflects into the net off of the crossbar."],
        qNum : 17,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'She went bar down on that clapper!'
        },
        {
        question: "Barn",
        choices: ["Ice Rick"],
        qNum : 18,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'Goin\' down to the barn to play some hockey.' 
        },
        {
        question: "Celly",
        choices: ["A celebration"],
        qNum : 19,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'He topped off that beauty goal with a sweet celly.'
        },
        {
        question: "The Show",
        choices: ["The NHL"],
        qNum : 20,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'Every hockey player dreams of going to the The Show.'
        },
        {
        question: "Sauce",
        choices: ["A pass that goes through the air and hits the ice right before hitting the teammate\'s stick tape."],
        qNum : 21,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'He put it where grandma puts the peanut butter after a greasy sauce from winger.'
        },
        {
        question: "Sieve",
        choices: ["A bad goalie"],
        qNum : 22,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:'That sieve is so full of holes he lets everything in.'
        },
        {
        question: "Snipe",
        choices: [""],
        qNum : 23,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:''
        },
        {
        question: "Gordie Howe Hat Trick",
        choices: [""],
        qNum : 24,
        correct : 0,
        correctImage : ["assets/images/gameanswers/"],
        correctDescription:''
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