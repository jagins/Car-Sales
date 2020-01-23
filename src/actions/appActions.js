export const removeFeature = item =>
{
    return {type: 'REMOVE', payload: item};
};

export const buyFeature = item =>
{
    return {type: 'BUY', payload: item};
}