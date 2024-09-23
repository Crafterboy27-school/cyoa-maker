(async()=>{
    return;
    let logsWindow = window.open("about:blank")

    const consoleUnproxied = console;

    const consoleProxyHandler = {
        get(target, prop, receiver) {
            return function(...args){
                alert('e')
                let el = logsWindow.document.createElement("p");

                el.textContent = prop+": "+args.join(" ")
                logsWindow.document.appendChild(el)

                consoleUnproxied[prop](...args)
            }
        },
      };
      
    const consoleProxy = new Proxy(consoleUnproxied, consoleProxyHandler);

    console = consoleProxy

    console.log("e")
})()