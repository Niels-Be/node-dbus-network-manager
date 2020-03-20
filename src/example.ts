import * as DBus from "dbus-next";
import { NetworkManager, Device, DeviceStatistics } from ".";

async function run() {
    DBus.setBigIntCompat(true);
    const bus = DBus.systemBus();

    const nm = await NetworkManager.Connect(bus);
    console.log(await nm.Version());

    const devs = await nm.Devices();
    console.log(devs);
    const dev = await Device.Connect(bus, devs[0]);
    console.log(await dev.Interface());

    const devStat = await DeviceStatistics.Connect(bus, devs[0]);
    console.log(await devStat.TxBytes());

    const conEn = await nm.ConnectivityCheckEnabled();
    await nm.ConnectivityCheckEnabled(!conEn);
    console.log(!conEn);

    bus.disconnect();
}

run();
