import React from 'react'
// import noUiSlider from 'nouislider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    // let slider
    //
    // slider = document.getElementById('slider');
    // if (slider) {
    //     noUiSlider.create(slider, {
    //         start: [20, 80],
    //         connect: true,
    //         range: {
    //             'min': 0,
    //             'max': 100
    //         }
    //     });
    // }


    return (
        <>
            {/*<div id="slider"/>*/}
            <input
                type={'range'}
                min={0}
                max={100}
                value={value[0]}

            />
        </>
    )
}

export default SuperDoubleRange
