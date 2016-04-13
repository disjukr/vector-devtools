const viewStyle = `
    width: 100px;
    height: 100px;
    border: 1px solid black;
    position: relative;
    overflow: hidden;
    font-size: 10px;
`;

const circleStyle = `
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 22px);
    height: calc(100% - 22px);
    border-radius: 50%;
    border: 1px dashed red;
`;

function textStyle(plus, vert) {
    return `
        position: absolute;
        top: ${ vert ? (plus ? 100 : 0) : 50 }%;
        left: ${ vert ? 50 : (plus ? 100 : 0) }%;
        transform: translate(${
            vert ? -50 : (plus ? -100 : 0)
        }%, ${
            vert ? (plus ? -100 : 0) : -50
        }%);
    `;
}

const plusYStyle = textStyle(true, true);
const plusXStyle = textStyle(true, false);
const minusYStyle = textStyle(false, true);
const minusXStyle = textStyle(false, false);

function vectorStyle({x, y}) {
    const len = Math.sqrt(x * x + y * y);
    return `
        position: absolute;
        width: calc(${ len * 50 }% - 10px);
        top: 50%;
        left: 50%;
        transform: rotate(${ Math.atan2(y, x) }rad);
        transform-origin: left;
    `;
}

const vectorBarStyle = `
    width: 100%;
    border-bottom: 1px solid red;
`;

const vectorArrowStyle = `
    position: absolute;
    left: calc(100% - 6px);
    top: -4px;
    border-top: 4px solid transparent;
    border-left: 6px solid red;
    border-bottom: 4px solid transparent;
`;

export class VectorFormatter {
    constructor(vectorType) {
        this.vectorType = vectorType;
    }
    header(value) {
        if (!(value instanceof this.vectorType)) {
            return null;
        }
        return <div class="vector-view" style={ viewStyle }>
            <div class="circle" style={ circleStyle }></div>
            <span style={ plusYStyle }>+y</span>
            <span style={ plusXStyle }>+x</span>
            <span style={ minusYStyle }>-y</span>
            <span style={ minusXStyle }>-x</span>
            <div class="vector" style={ vectorStyle(value) }>
                <div class="vector-bar" style={ vectorBarStyle }></div>
                <div class="vector-arrow" style={ vectorArrowStyle }></div>
            </div>
        </div>;
    }
    hasBody() {
        return false;
    }
    body() {
        return null;
    }
}
