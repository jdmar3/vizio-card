**Sample overview:**

![Sample overview](https://github.com/marrobHD/tv-card/blob/master/KOLwmt1vGh.png)

Add this to your lovelace configuration:

```yaml
type: custom:denon-card
entity: sun.sun
name: Living Room Receiver
avr: true
power:
  service: switch.turn_on
  service_data:
    entity_id: switch.living_room_avr_power
```

Look at [README](https://github.com/jdmar3/denon-card/blob/master/README.md) for more information
