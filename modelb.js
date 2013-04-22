
var Model = { 
    model: null,


//    clear: function() {
//        this.model = { nodes: [], links: [], authors: []}
//    },

    clear: function() {
        this.model = { nodes: [ {"hash":0,"content": "Political failure modes and the beige dictatorship. Random meta-political noodling here... For a while I've had the unwelcome feeling that we're living under occupation by Martian invaders. (Not just here in the UK, but everyone, everywhere on the planet.) Something has gone wrong with our political processes, on a global scale. But what? It's obviously subtle — we haven't been on the receiving end of a bunch of jack-booted fascists or their communist equivalents organizing putsches.","evaluation":1,"type":1,"author":"Mike","time":"17-abr-2013"},
    {"hash":1,"content":"I don't think the current state is forever. it's not as stable as it seems. The increasing inequality (historically) has always been corrected by a swing back, because the powerful recognise that it's necessary to avoid violent revolution. Personally speaking, I'm planning to get rich, and then change things. ","evaluation":4,"type":1,"author":"Mike","time":"17-abr-2013"},
    {"hash":2,"content":"Suspect we need a great definition of what a working representative government looks like and how it functions before we can come up with a system that gives us one.","evaluation":1,"type":2,"author":"Mike","time":"17-abr-2013"},
    {"hash":3,"content":"For reference, Charlie, would you like to describe what the non-failure mode of representative democracy looks like on a day-to-day basis?","evaluation":6,"type":2,"author":"Mike","time":"17-abr-2013"},
    {"hash":4,"content":"That's a hard problem to answer. The solution may well not be representative democracy, at least, not as we know it, any more than the solution to the problems besetting monarchical system in Europe circa 1848 was a better monarchy.","evaluation":1,"type":3,"author":"Mike","time":"17-abr-2013"},
    {"hash":5,"content":">The news cycle is dominated by large media organizations and the interests of the corporate sector.This is the most vulnerable part of this trend - various Internet based technology continue to erode this monopoly by reducing the power of gatekeepers. And this is where entrenched interest's backlash would be in the nearest future. And this is where real battle should be fought.","evaluation":1,"type":1,"author":"Mike","time":"17-abr-2013"},
    {"hash":6,"content":"To7 Actually, if you look at how Huffington post evolved from a challenger of the traditional media, into a copycat of them, you will see that once your incentive becomes attracting eyeballs it all becomes cute kittens, fake outrage and diets... There is very little qualititative difference between Huffington Post and The Sun today.","evaluation":2,"type":1,"author":"Mike","time":"17-abr-2013"},
    {"hash":7,"content":"To8 Yes. And that's what will kill HuffPost. Any specific media outlet will have limited time before succumbing into beige. But unless you can prevent formation of the new ones - it will just be replaced by incumbent. Who will also fall into beige after some evolution","evaluation":1,"type":1,"author":"Mike","time":"17-abr-2013"},
{"hash":8,"content":"I think you are on to something here. Even in the more chaotic setting of the Dutch system (proportional representation, based on party lists) this problem occurs. The traditional parties with strong organizations and lots of experience occupy the centre of politics and decide policy. The only real way for other groups to come in is from an extreme position. In theory that means that we do have a mechanism for change present, but practice teaches that the only groups that can enter the system successfully are those that copy the structure and organization of the traditional parties.","evaluation":1,"type":1,"author":"Mike","time":"17-abr-2013"}], links: [
    {"source":1,"target":0,"ssource":1,"ttarget":0,"evaluation":6,"type":1,"author":"Mike","time":"17-abr-2013"},
    {"source":2,"target":0,"ssource":2,"ttarget":0,"evaluation":18,"type":2,"author":"Mike","time":"17-abr-2013"},
    {"source":3,"target":0,"ssource":3,"ttarget":0,"evaluation":6,"type":2,"author":"Mike","time":"17-abr-2013"},
    {"source":4,"target":3,"ssource":4,"ttarget":3,"evaluation":6,"type":3,"author":"Mike","time":"17-abr-2013"},
    {"source":5,"target":0,"ssource":5,"ttarget":0,"evaluation":18,"type":1,"author":"Mike","time":"17-abr-2013"},
    {"source":6,"target":5,"ssource":6,"ttarget":5,"evaluation":6,"type":4,"author":"Mike","time":"17-abr-2013"},
    {"source":7,"target":6,"ssource":7,"ttarget":6,"evaluation":15,"type":4,"author":"Mike","time":"17-abr-2013"},
    {"source":8,"target":0,"ssource":8,"ttarget":0,"evaluation":6,"type":4,"author":"Mike","time":"17-abr-2013"},
    {"source":2,"target":3,"ssource":2,"ttarget":3,"evaluation":6,"type":6,"author":"Mike","time":"17-abr-2013"} ], authors: []}
    },


    
    importFile: function(text, mime) {
        // TODO: check mime for other formats
        switch (mime) {
            case "application/x-incoma+json":
            default:
                this.model = JSON.parse(text);
        }
    }, 
    
    exportFile: function() {
        alert("exportFile: " + this.model.nodes + "-" + this.model.links);
        return { text: JSON.stringify(this.model),
                 mime: "application/x-incoma+json" };
    },
        
};