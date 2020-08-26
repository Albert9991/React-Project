import React from 'react';

const myHOC = (Component) => {
    const obj = {
        push: (url) => {
            console.log("myHOC -> push --> url", url)
        }
    }
    const obj2 = {
        getData: () => {
            console.log("myHOC -> getData")
        }
    }
    return class extends React.Component {
        render() {
            return (
                <Component
                    obj={obj}
                    obj2={obj2}
                    {...this.props}
                />
            )
        }
    }

}
export default myHOC;
