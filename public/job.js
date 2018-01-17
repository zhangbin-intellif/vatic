function Job(data)
{
    var me = this;

    this.slug = null;
    this.start = null;
    this.stop = null; 
    this.width = null; 
    this.height = null; 
    this.skip = null; 
    this.perobject = null;
    this.completion = null;
    this.blowradius = null;
    this.thisid = null;
    this.labels = null;
    this.keyframe = null;
    this.frameurl = function(i)
    {
        folder1 = parseInt(Math.floor(i / 100));
        folder2 = parseInt(Math.floor(i / 10000));
        return "frames/" + me.slug + 
            "/" + folder2 + "/" + folder1 + "/" + parseInt(i) + ".jpg";
    }
}

function job_import(data)
{
    var job = new Job();
    job.slug = data["slug"];
    job.start = parseInt(data["start"]);
    job.stop = parseInt(data["stop"]);
    job.width = parseInt(data["width"]);
    job.height = parseInt(data["height"]);
    job.skip = parseInt(data["skip"]);
    job.perobject = parseFloat(data["perobject"]);
    job.completion = parseFloat(data["completion"]);
    job.blowradius = parseInt(data["blowradius"]);
    job.jobid = parseInt(data["jobid"]);
    job.labels = data["labels"];
    job.attributes = data["attributes"];
    job.training = parseInt(data["training"]);

    console.log("Job configured!");
    console.log("  Slug: " + job.slug);
    console.log("  Start: " + job.start);
    console.log("  Stop: " + job.stop);
    console.log("  Width: " + job.width);
    console.log("  Height: " + job.height);
    console.log("  Skip: " + job.skip);
    console.log("  Per Object: " + job.perobject);
    console.log("  Blow Radius: " + job.blowradius);
    console.log("  Training: " + job.training);
    console.log("  Job ID: " + job.jobid);
    console.log("  Labels: ");
    for (var i in job.labels)
    {
        console.log("    " + i + " = " + job.labels[i]);
    }
    console.log("  Attributes:");
    for (var i in job.attributes)
    {
        for (var j in job.attributes[i])
        {
            console.log("    " + job.labels[i] + " = " + job.attributes[i][j])
        }
    }
    //get keyframe
    var arr = [];
    arr.push(job.start);
    for (var i=job.start+1; i<=job.stop;i++){
        var b = 0;
        var c = 0;
        if ((i-1).toString() in json){
            b = json[(i-1).toString()].length;
        }
        if(i.toString() in json){
           c = json[i.toString()].length;
        }
        if (c!=b){
           arr.push(i);
        }
    }
    this.keyframe = arr.slice();
    var str="";
    for (var i=0;i<this.keyframe.length;i++){
        str += this.keyframe[i] + " ";
    }
    console.log(str);
    return job;
}
