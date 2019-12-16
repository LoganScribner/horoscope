signs = ['Aquarius', 'Pisces' , 'Aries' , 'Taurus' , 'Gemini' , 'Cancer' , 'Leo' , 'Virgo' , 'Libra' , 'Scorpio' , 'Sagittarius' , 'Capricorn'
, "This isn't a real day silly"];
messages = [", Congratulations! You are an Aquarius! Given the benefit of the doubt, you have an opportunity to fight your" +
" battles from common grounds, understanding the needs of others that led them to act in a certain way. Stay compassionate" +
" but also true to your own emotional needs.This week’s affirmation: 'I am self-sufficient and grounded.'" , ", Congratulations!" +
" You are a Pisces! Health depends on the moves you are willing to make in the right direction. Make yourself happy, care" +
" for your body, and comfort your Soul by turning to activities that set your brain free of overthinking and fill your heart" +
" with self-love and tenderness. This week’s affirmation: 'I let my energy break barriers that hold me back.'" , ", Congratulations!" +
" You are an Aries! The only thing that can add water to your own inner fire and keep it under control, is your own feelings." +
" Stay aware of them even when carried away into relationships and contacts that are a bit overbearing and pushing your buttons" +
" along the way. This week’s affirmation: 'I am honest with my heart.'" , ", Congratulations! You are a Taurus! It is possible" +
" that certain emotions are triggered by others, while being a core of a very different inner conflict. See how much responsibility" +
" everyone deserves in the real world, governed by actual contacts with all obvious conflicts and possible insults. This week’s " +
"affirmation: 'I forgive, to others and myself.'" , ", Congratulations! You are a Gemini! With a clear perspective and an outlook" +
" for your future that is worth the fight, you will do a lot more than if you simply follow the pattern you see today. Learn, " +
"explore, and go for an adventure or two before stating your final judgment. This week’s affirmation: 'I am enough, just as I am.'"
, ", Congratulations! You are a Cancer! Stay true to both your past and the future. Living in the moment is the only thing that" +
    " sets you free from certain patterns, and the point of balance between your experience and your desires needs to be found. " +
    "This week’s affirmation: 'I listen.'" , ", Congratulations! You are a Leo! Care for your body and the routine that feeds" +
    " it, for your brain depends on the status of your kidneys, liver and heart. When you take care of yourself, the rest of " +
    "the world can take care of you too. This week’s affirmation: 'I value my body.'" , ", Congratulations! You are a Virgo! " +
    "It is time to give in, sink in, and give up on stubborn ideals that aren’t ideals to begin with. The ideal is to come" +
    " with what can be materialized, and the further you drift away from your own desires, the more impossible the plan for" +
    " your future could seem. This week’s affirmation: 'I make myself happy.'" , ", Congratulations! You are a Libra! Don’t" +
    " take others for granted and see that relationships standing by your side have a value that isn’t to be dismissed. Hold" +
    " on to long-term value, but don’t let it hold you back on the path towards inspiring and new endeavors. You don’t want to " +
    "miss your opportunities, but what you truly need to fulfill all of your own needs is balance. This week’s affirmation: " +
    "'My actions are balanced.'" , ", Congratulations! You are a Scorpio! Focus on the material goal as much as you need to" +
    " but see that your need to smile and be tender with yourself is worth much more than anything that the material world has" +
    " to offer. The value of money shouldn’t be taken away, but it should be balanced with the need to be cherished and in" +
    " healthy relationships. This week’s affirmation: 'I am balanced and flexible.'" , ", Congratulations! You are a Sagittarius! " +
    "Some of the fails in your life have very little to do with you and this might come as a surprise. See your value and " +
    "understand that you are only human and bound to make mistakes, open for interactions that are healthy and accepting you with" +
    " all your flaws and weaknesses. This week’s affirmation: 'I am free to be me.'" , ", Congratulations! You are a Capricorn! " +
    "Do what satisfies you, but only to the point where you feel stable and healthy in your own shoes. If your body needs more" +
    " sleep, give it sleep instead of giving it coffee, and feed your actual desires instead of training yourself to not need " +
    "anymore. This week’s affirmation: 'I meet my needs.'"];
images = ["sign_images/aquarius.png" , "sign_images/pisces.png" , "sign_images/aries.png" , "sign_images/taurus.png" , "sign" +
"_images/gemini.png" , "sign_images/cancer.png" , "sign_images/leo.png" , "sign_images/virgo.png" , "sign_images/libra.png" ,
    "sign_images/scorpio.png" , "sign_images/sagittarius.png" , "sign_images/capricorn.png" , "sign_images/special_sign.png"];


function tester(){

    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    var birthday = determineBirthday(month, day);

    //console.log(data);



    var sign = determineSign(month,day);

    document.getElementById("output").innerHTML = signs[sign];
    document.getElementById("sign_images").src = images[sign];
    document.getElementById("message").innerHTML = birthday + name + messages[sign];

}

function determineSign(month,day) {

    //based on month and day, return the number of the users sign like 0 = Aquarius
    if(((month == 1) && (day >= 20)) || ((month == 2) && (day <= 18))) {
        return 0;
        //aquarius
    }

    if(((month == 2) && ((day >= 19) && (day <=29))) || ((month == 3) && (day <= 20))){
        return 1;
        //pisces
    }

    if((month == 2) && ((day == 30) || (day == 31)) || ((month == 4) && (day == 31)) || ((month == 6) && (day == 31)) ||
        ((month == 9) && (day == 31)) || ((month == 11) && (day == 31))){
        return 12;
        //troll
    }

    if(((month == 3) && (day >= 21)) || ((month == 4) && (day <= 19))){
        return 2;
        //aries
    }

    if(((month == 4) && (day >= 20)) || ((month == 5) && (day <= 20))){
        return 3;
        //taurus
    }

    if(((month == 5) && (day >= 21)) || ((month == 6) && (day <= 20))){
        return 4;
        //gemini
    }

    if(((month == 6) && (day >= 21)) || ((month == 7) && (day <= 22))){
        return 5;
        //cancer
    }

    if(((month == 7) && (day >= 23)) || ((month == 8) && (day <= 22))){
        return 6;
        //leo
    }

    if(((month == 8) && (day >= 23)) || ((month == 9) && (day <= 22))){
        return 7;
        //Virgo
    }

    if(((month == 9) && (day >= 23)) || ((month == 10) && (day <= 22))){
        return 8;
        //libra
    }

    if(((month == 10) && (day >= 23)) || ((month == 11) && (day <= 21))){
        return 9;
        //scorpio
    }

    if(((month == 11) && (day >= 22)) || ((month == 12) && (day <= 21))){
        return 10;
        //sagittarius
    }

    if(((month == 12) && (day >= 22)) || ((month == 1) && (day <= 19))){
        return 11;
        //capricorn
    }
}


function determineBirthday(userMonth, userDay){
    var birthday = "";
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    if(userDay == currentDay && userMonth - 1 == currentMonth){
        birthday = "Happy Birthday! ";
    }
    return birthday;
}