let Sin_título = 0
bluetooth.uartWriteNumber(Sin_título)
datalogger.log(datalogger.createCV("Sin título", Sin_título))
dataStreamer.writeNumber(Sin_título)
dataStreamer.writeNumber(Sin_título, Sin_título)
serial.writeNumber(Sin_título)
basic.forever(function () {
    Sin_título += 1
    bluetooth.uartWriteNumber(Sin_título)
    datalogger.log(datalogger.createCV("Sin título", Sin_título))
    dataStreamer.writeNumber(Sin_título)
    dataStreamer.writeNumber(Sin_título, Sin_título)
    serial.writeNumber(Sin_título)
})
