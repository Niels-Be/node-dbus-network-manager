import * as DBus from 'dbus-next';
import { EventEmitter } from 'events';

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class.ts.hbs
 */

// Introspection XML of org.freedesktop.NetworkManager at /org/freedesktop/NetworkManager/DHCP6Config/28
const XMLObjectData = `<!DOCTYPE node PUBLIC "-//freedesktop//DTD D-BUS Object Introspection 1.0//EN"
                      "http://www.freedesktop.org/standards/dbus/1.0/introspect.dtd">
<!-- GDBus 2.56.4 -->
<node>
  <interface name="org.freedesktop.DBus.Properties">
    <method name="Get">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="s" name="property_name" direction="in"/>
      <arg type="v" name="value" direction="out"/>
    </method>
    <method name="GetAll">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="a{sv}" name="properties" direction="out"/>
    </method>
    <method name="Set">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="s" name="property_name" direction="in"/>
      <arg type="v" name="value" direction="in"/>
    </method>
    <signal name="PropertiesChanged">
      <arg type="s" name="interface_name"/>
      <arg type="a{sv}" name="changed_properties"/>
      <arg type="as" name="invalidated_properties"/>
    </signal>
  </interface>
  <interface name="org.freedesktop.DBus.Introspectable">
    <method name="Introspect">
      <arg type="s" name="xml_data" direction="out"/>
    </method>
  </interface>
  <interface name="org.freedesktop.DBus.Peer">
    <method name="Ping"/>
    <method name="GetMachineId">
      <arg type="s" name="machine_uuid" direction="out"/>
    </method>
  </interface>
  <interface name="org.freedesktop.NetworkManager.DHCP6Config">
    <signal name="PropertiesChanged">
      <arg type="a{sv}" name="properties"/>
    </signal>
    <property type="a{sv}" name="Options" access="read"/>
  </interface>
</node>
`;

/**
 * Service: org.freedesktop.NetworkManager
 * ObjectPath: /org/freedesktop/NetworkManager/DHCP6Config/28
 * Interface: org.freedesktop.NetworkManager.DHCP6Config
 */
export class DHCP6Config extends EventEmitter {

    public readonly dbusInterfaceName = 'org.freedesktop.NetworkManager.DHCP6Config';
    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string = "/org/freedesktop/NetworkManager/DHCP6Config/28", xml: string = XMLObjectData): Promise<DHCP6Config> {
        return bus.getProxyObject('org.freedesktop.NetworkManager', objectPath, xml).then((obj) => new DHCP6Config(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.freedesktop.NetworkManager.DHCP6Config');
        this.propertiesDBusInterface = this.dbusObject.getInterface('org.freedesktop.DBus.Properties');

        // forward property change events
        const forwardPropertyChange = (iface: string, changed: any, invalidated: any) => {
            if(iface === this.dbusInterfaceName) {
                this.emit('PropertiesChanged', iface, changed, invalidated);
            }
        }

        // forward all signals
        this.on("newListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.on('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.on(event, listener);
            }
        });
        this.on("removeListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.removeListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.removeListener(event, listener);
            }
        });
    }

    /***** Properties *****/

    public getProperties(): Promise<{[name: string]: DBus.Variant}> {
        return this.propertiesDBusInterface.GetAll(this.dbusInterfaceName);
    }

    public getProperty(name: string): Promise<DBus.Variant> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, name);
    }

    public setProperty(name: string, value: DBus.Variant): Promise<void> {
        return this.propertiesDBusInterface.Set(this.dbusInterfaceName, name, value);
    }

    //@property({ name: 'Options', signature: 'a{sv}', access: ACCESS_READ })
    public Options(): Promise<{[key: string]: DBus.Variant}> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Options').then((variant: DBus.Variant) => variant.value);
    }


    /***** Methods *****/

}
/***** Signals for org.freedesktop.NetworkManager.DHCP6Config *****/
export declare interface DHCP6Config {
    //@signal({ name: 'PropertiesChanged', signature: 'a{sv}' })
    on(evt: "PropertiesChanged", cb: (properties: {[key: string]: DBus.Variant}) => void): this;
    on(evt: "PropertiesChanged", cb: (iface: string, changedProperties: {[key:string]: any}, invalidatedProperties: string[]) => void): this;
    on(event: string, listener: Function): this;
}

