`use strict`;

const uniqueMessage = error => {
    let output;
    try {
        let fieldName = error.message.substring(error.message.lastIndexOf(`.$`) + 2, error.message.lastIndexOf(`_1`));
        output = fieldName.chartAt(0).toUpperCase() + fieldName.slice(1) + 'already exists';
    }catch (ex) {
        output = `Unique field aleady exists`;
    }

    return output;
};

//Get the error message from object

exports.errorHandler = error => {
    let message = '';

    if (error.code) {
        switch (error.code) {
            case 11000:
            case 11001:
                message = uniqueMessage(error);
                break;
            default:
                message = `something went wrong`;
        }
    }  else {
        for (let errorName in error.errorors) {
            if(error.errorors[errorName].message) message = err0r.errorors[errorName].message;
        }
    }

    return message;
};
