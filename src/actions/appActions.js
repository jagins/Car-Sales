export const removeFeature = item =>
{
    return {type: 'REMOVE_FEATURE', payload: item};
};

export const buyFeature = item =>
{
    return {type: 'BUY', payload: item};
}