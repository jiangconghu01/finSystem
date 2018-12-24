let comy =
    `1.62
    1.92
    1.96
    2.13
    30.75
    1.87
    0
    1.91
    1.4
    1.84
    2.64
    0
    1.62
    1.28
    2.1
    2.32
    1.11
    1.67
    1.45
    0
    1.57
    1.8
    1.68
    1.99
    1.14
    1.82
    1.5
    2.02
    1.83
    1.65
    2.03
    1.37
    1.62
    0.85
    1.3
    0
    1.64
    1.82
    1.75
    1.55
    1.81
    1.78
    2.01
    1.79
    0.67
    3.8
    0
    0
    0
    1.04
    3.33
    0.28
    3.54
    1
    17.85
    0
    1.33
    1.37
    0
    0
    1.24
    2.34
    4.09
    2.22
    1.51
    2.97
    1.76
    2.18
    2.1
    1.5
    1.54
    1.58
    1.61
    1.44
    1.56
    1.33
    1.81
    1.66
    1.68
    0.88
    1.85`.split('\n').map((ele) => {
        const a = parseFloat(ele).toFixed(2);
        //return a < 5 ? a : 0;
        return a;
    });
let comx =
    `-0.173469388
    -0.020408163
    0.076923077
    0.95412844
    -0.274935157
    3.348837209
    0
    1.195402299
    -0.952702703
    -0.070707071
    3.19047619
    -1
    -0.018181818
    -0.304347826
    0.111111111
    0.423312883
    0.077669903
    0.037267081
    -0.198895028
    -1
    -0.042682927
    0.19205298
    -0.086956522
    0.592
    0
    0.052023121
    -0.090909091
    0.02020202
    0.082840237
    -0.10326087
    0.326797386
    -0.104575163
    -0.08988764
    -0.654471545
    -0.675810474
    -1
    0.071895425
    0.083333333
    0
    0.068965517
    -0.005494505
    0.028901734
    0.129213483
    0.306569343
    -0.588957055
    -0.159292035
    -1
    0
    0
    1.311111111
    0.486607143
    -0.2
    10.41935484
    0.020408163
    0.098461538
    0
    -0.558139535
    -0.573208723
    0
    -1
    -0.081481481
    -0.139705882
    0.152112676
    0.574468085
    0.006666667
    -0.224543081
    0
    -0.164750958
    -0.036697248
    0.006711409
    0.01986755
    -0.102272727
    -0.024242424
    -0.12195122
    -0.025
    0.015267176
    0.034285714
    0.185714286
    -0.256637168
    -0.706666667
    5.607142857`.split('\n').map((ele) => {
        const a = parseFloat(ele).toFixed(4);
        return (a > 2 || a < -2) ? 0 : a;
    });;
const combar =
    `-0.0133302
    -0.015365583
    0.000938308
    -0.030771476
    -0.052804036
    -0.026705733
    0
    -0.007225449
    0.16514095
    -0.336362215
    -0.013661721
    -0.279138399
    -0.063009999
    -0.258042952
    0.113862338
    -0.35372548
    -0.001846269
    -0.498071028
    0.216016093
    -0.049510533
    -0.68725185
    -0.061790613
    -0.460234231
    0.186822663
    0.058679209
    -0.038663529
    1.915951704
    -1.436530145
    -0.022846283
    0.961762656
    -0.090862822
    -0.315445009
    -0.920793257
    -0.707434721
    -0.976944984
    -0.987092617
    -1.091752667
    -1.091572302
    -54.43868253
    0.482919948
    -4.703178318
    0.002135478
    0.104599041
    0.353438394
    1.016063082
    0.004107153
    -0.072936991
    0
    0
    -0.214269103
    0.128295369
    -0.527281464
    -0.02597946
    0.049581938
    0.285318552
    -0.217563358
    -0.081603211
    -0.126324311
    0
    -0.023937902
    -0.050835162
    -0.054467902
    0.26439096
    0.137771422
    0.03773805
    -0.196871477
    0.111455015
    0.034270125
    -0.031313225
    -0.053576289
    -0.124579576
    -0.088112896
    0.021533707
    -0.145650167
    -0.01796652
    -0.164406562
    -0.427573726
    -0.051187503
    0.052276721
    -0.050797931
    -0.015606118`.split('\n').map((ele) => {
        const a = parseFloat(ele).toFixed(4);
        //return (a > 2 || a < -2) ? 0 : a;
        return a;
    });;

export { comx, comy, combar }