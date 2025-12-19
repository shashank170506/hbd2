$(function () {

    const canvas = $('#canvas');
    const width = canvas.width();
    const height = canvas.height();

    canvas.attr("width", width);
    canvas.attr("height", height);

    const opts = {
        seed: { x: width / 2, color: "rgb(190,26,37)", scale: 2 },
        branch: [[535,680,570,250,500,200,30,100]],
        bloom: { num: 700, width: 1080, height: 650 },
        footer: { width: 1200, height: 5, speed: 10 }
    };

    const tree = new Tree(canvas[0], width, height, opts);
    const seed = tree.seed;
    const foot = tree.footer;
    let hold = 1;

    canvas.on("click", function () {
        playAudio();
        hold = 0;
        canvas.off("click");
    });

    const seedAnimate = eval(Jscex.compile("async", function () {
        seed.draw();
        while (hold) { {
            $await(Jscex.Async.sleep(10));
        }}
    }));

    const runAsync = eval(Jscex.compile("async", function () {
        $await(seedAnimate());
    }));

    runAsync().start();
});
