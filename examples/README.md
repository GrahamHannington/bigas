# Examples

## Word lists

### Dolch

Copied from the Wikipedia article "[Dolch word list](https://en.wikipedia.org/wiki/Dolch_word_list)".

Non-nouns:

- [Pre-primer](https://grahamhannington.github.io/bigas?text=a//and//away//big//blue//can//come//down//find//for//funny//go//help//here//I//in//is//it//jump//little//look//make//me//my//not//one//play//red//run//said//see//the//three//to//two//up//we//where//yellow//you) (40 words)
- [Primer](https://grahamhannington.github.io/bigas?text=all//am//are//at//ate//be//black//brown//but//came//did//do//eat//four//get//good//have//he//into//like//must//new//no//now//on//our//out//please//pretty//ran//ride//saw//say//she//so//soon//that//there//they//this//too//under//want//was//well//went//what//white//who//will//with//yes) (52 words)
- [1st Grade](https://grahamhannington.github.io/bigas?text=after//again//an//any//as//ask//by//could//every//fly//from//give//going//had//has//her//him//his//how//just//know//let//live//may//of//old//once//open//over//put//round//some//stop//take//thank//them//then//think//walk//were//when) (41 words)
- [2nd Grade](https://grahamhannington.github.io/bigas?text=always//around//because//been//before//best//both//buy//call//cold//does//don't//fast//first//five//found//gave//goes//green//its//made//many//off//or//pull//read//right//sing//sit//sleep//tell//their//these//those//upon//us//use//very//wash//which//why//wish//work//would//write//your) (46 words)
- [3rd Grade](https://grahamhannington.github.io/bigas?text=about//better//bring//carry//clean//cut//done//draw//drink//eight//fall//far//full//got//grow//hold//hot//hurt//if//keep//kind//laugh//light//long//much//myself//never//only//own//pick//seven//shall//show//six//small//start//ten//today//together//try//warm) (41 words)

[Nouns](https://grahamhannington.github.io/bigas?text=apple//baby//back//ball//bear//bed//bell//bird//birthday//boat//box//boy//bread//brother//cake//car//cat//chair//chicken//children//Christmas//coat//corn//cow//day//dog//doll//door//duck//egg//eye//farm//farmer//father//feet//fire//fish//floor//flower//game//garden//girl//goat//grass//ground//hand//head//hill//home//horse//house//kitty//leg//letter//man//men//milk//money//morning//mother//name//nest//night//paper//party//picture//pig//rabbit//rain//ring//robin//Santa+Claus//school//seed//sheep//shoe//sister//snow//song//squirrel//stick//street//sun//table//thing//time//top//toy//tree//watch//water//way//wind//window//woman//women//wood) (97 words)

### Miscellaneous

[Days of the week](https://grahamhannington.github.io/bigas?text=Monday//Tuesday//Wednesday//Thursday//Friday//Saturday//Sunday)

## [Burger](https://grahamhannington.github.io/bigas/examples/burger.html)

Web developers: this example uses the `formatSVGElementsByClassName()` function to format multiple SVG elements based on class name.

This example demonstrates two problems with Big As:

- Big As shrinkwraps to the bounding box of the text, which encompasses the full line height of the text, which might be more than the area actually occupied by the text glyphs.
For instance, if the text doesn't include characters with descenders (such as a lowercase "g"), then the SVG element will have some unused whitespace at the bottom. If you don't like this, then you need to manually apply formatting.
- On the mobile Safari browser, the serif word "PATTY" isn't the same width as other words. I don't understand why. It's the same width on desktop browsers.
