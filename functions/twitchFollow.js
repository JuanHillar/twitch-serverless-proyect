exports.handler = async function (event) {
    const { headers = [] } = event;

    const type = headers['twitch-eventsub-message-type'] || 'no type';
    const eventType = headers['twitch-eventsub-follow-type']

    if (type === 'notification' || eventType === 'channel.follow' {
        return {
            statusCode: 200,
            body: ''
        }
    } 
    
    console.log({ headers: event.headers, body: event.body})

    const { event: twitchEvent } = JSON.parse(event.body)
    const user = twitchEvent.user_name

    console.log(`${user} acaba de unirse!`)
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            type,
            message: 'ok',
        })
    };
};