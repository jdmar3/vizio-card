const LitElement = Object.getPrototypeOf(
  customElements.get("ha-panel-lovelace")
);

const html = LitElement.prototype.html;

class DenonCardServices extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _apps: {}
    };
  }

  //  static async getConfigElement() {
  //    await import("./denon-card-editor.js");
  //    return document.createElement("denon-card-editor");
  //  }

  static getStubConfig() {
    return {};
  }

  getCardSize() {
    return 7;
  }

  setConfig(config) {
    if (!config.entity) {
      console.log("Invalid configuration");
      return;
    }

    this._config = { theme: "default", ...config };
  }

  render() {
    if (!this._config || !this.hass) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.entity];

    const emptyButton = html`
      <ha-icon-button
        .action="${""}"
        @click="${this.handleActionClick}"
      ><ha-icon icon=""></ha-icon
      ></ha-icon-button>
    `;

    return html`
      ${this.renderStyle()}
      <ha-card .header="${this._config.name}">
          ${
            this._config.power || this._config.power_on || this._config.power_off
              ? html`
                  <div class="row">
                    ${!(this._config.power) && this._config.power_off
                      ? html`
                          <ha-icon-button
                            .action="${"power_off"}"
                            @click="${this.handleActionClick}"
                            title="Power off"
                          ><ha-icon icon="mdi:power-off"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.power_sleep
                      ? html`
                          <ha-icon-button
                            .action="${"power_sleep"}"
                            @click="${this.handleActionClick}"
                            title="Sleep"
                          ><ha-icon icon="mdi:power-sleep"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.power_on && !(this._config.power)
                      ? html`
                          <ha-icon-button
                            .action="${"power_on"}"
                            @click="${this.handleActionClick}"
                            title="Power on"
                          ><ha-icon icon="mdi:power-on"></ha-icon
                          ></ha-icon-button>
                        `
                      : this._config.power
                      ? html`
                          <ha-icon-button
                            .action="${"power"}"
                            @click="${this.handleActionClick}"
                            title="Power"
                          ><ha-icon icon="mdi:power"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }

          ${
            this._config.cable ||
            this._config.bluray ||
            this._config.dvd ||
            this._config.firetv ||
            this._config.kodi ||
            this._config.laptop
              ? html`
                  <div class="row">
                    ${this._config.cable
                      ? html`
                          <ha-icon-button
                            .action="${"cable"}"
                            @click="${this.handleActionClick}"
                            title="Cable/Sat"
                          ><ha-icon icon="mdi:video-input-hdmi"></ha-icon
                          ></ha-icon-button>
                        `
                      : this._config.firetv
                      ? html `
                          <ha-icon-button
                            .action="${"firetv"}"
                            @click="${this.handleActionClick}"
                            title="FireTV"
                          ><ha-icon icon="si:amazonfiretv"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.bluray
                      ? html`
                          <ha-icon-button
                            .action="${"bluray"}"
                            @click="${this.handleActionClick}"
                            title="Bluray"
                          ><ha-icon icon="mdi:disc-player"></ha-icon
                          ></ha-icon-button>
                        `
                      : this._config.kodi
                      ? html `
                          <ha-icon-button
                            .action="${"kodi"}"
                            @click="${this.handleActionClick}"
                            title="Kodi"
                          ><ha-icon icon="mdi:kodi"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.dvd
                      ? html`
                          <ha-icon-button
                            .action="${"dvd"}"
                            @click="${this.handleActionClick}"
                            title="DVD/Bluray"
                            ><ha-icon icon="mdi:disc-player"></ha-icon
                          ></ha-icon-button>
                        `
                      : this._config.laptop
                      ? html `
                          <ha-icon-button
                            .action="${"laptop"}"
                            @click="${this.handleActionClick}"
                            title="Laptop"
                          ><ha-icon icon="mdi:laptop"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }

          ${
            this._config.game ||
            this._config.tv_audio ||
            this._config.media_player ||
            this._config.nintendo_switch ||
            this._config.record_player
              ? html`
                  <div class="row">
                    ${this._config.game
                      ? html`
                          <ha-icon-button
                            .action="${"game"}"
                            @click="${this.handleActionClick}"
                            title="Game"
                          ><ha-icon icon="mdi:controller-classic"></ha-icon
                          ></ha-icon-button>
                        `
                      : this._config.nintendo_switch
                      ? html`
                          <ha-icon-button
                            .action="${"nintendo_switch"}"
                            @click="${this.handleActionClick}"
                            title="Nintendo Switch"
                          ><ha-icon icon="mdi:nintendo-switch"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.tv_audio
                      ? html`
                          <ha-icon-button
                            .action="${"tv_audio"}"
                            @click="${this.handleActionClick}"
                            title="TV Audio"
                          ><ha-icon icon="mdi:television"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.media_player
                      ? html`
                          <ha-icon-button
                            .action="${"media_player"}"
                            @click="${this.handleActionClick}"
                            title="DVD/Bluray"
                            ><ha-icon icon="mdi:play-network"></ha-icon
                          ></ha-icon-button>
                        `
                      : this._config.record_player
                      ? html`
                          <ha-icon-button
                            .action="${"record_player"}"
                            @click="${this.handleActionClick}"
                            title="Record Player"
                          ><ha-icon icon="mdi:record-player"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }
          
          ${
            this._config.usb ||
            this._config.am ||
            this._config.fm
              ? html`
                  <div class="row">
                    ${this._config.usb
                      ? html`
                          <ha-icon-button
                            .action="${"usb"}"
                            @click="${this.handleActionClick}"
                            title="USB"
                          ><ha-icon icon="mdi:usb-port"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.am
                      ? html`
                          <ha-icon-button
                            .action="${"am"}"
                            @click="${this.handleActionClick}"
                            title="AM"
                          ><ha-icon icon="mdi:radio-am"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.fm
                      ? html`
                          <ha-icon-button
                            .action="${"fm"}"
                            @click="${this.handleActionClick}"
                            title="FM"
                            ><ha-icon icon="mdi:radio-fm"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }

          ${
            this._config.bluetooth
              ? html`
                  <div class="row">
                    <ha-icon-button
                      .action="${"bluetooth"}"
                      @click="${this.handleActionClick}"
                      title="Bluetooth"
                    ><ha-icon icon="mdi:bluetooth-audio"></ha-icon
                    ></ha-icon-button>
                  </div>
                `
              : ""
          }

          ${
            this._config.channel_up ||
            this._config.eco ||
            this._config.volume_up
              ? html`
                  <div class="row">
                    ${this._config.channel_up
                      ? html`
                          <ha-icon-button
                            .action="${"channel_up"}"
                            @click="${this.handleActionClick}"
                            title="Channel Up"
                          ><ha-icon icon="mdi:chevron-up-circle-outline"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.eco
                      ? html`
                          <ha-icon-button
                            .action="${"eco"}"
                            @click="${this.handleActionClick}"
                            title="Eco"
                          ><ha-icon icon="mdi:leaf-circle-outline"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.volume_up
                      ? html`
                          <ha-icon-button
                            .action="${"volume_up"}"
                            @click="${this.handleActionClick}"
                            title="Volume Up"
                          ><ha-icon icon="mdi:volume-plus"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }

          ${
            this._config.channel_down ||
            this._config.volume_mute ||
            this._config.volume_down
              ? html`
                  <div class="row">
                    ${this._config.channel_down
                      ? html`
                          <ha-icon-button
                            .action="${"channel_down"}"
                            @click="${this.handleActionClick}"
                            title="Channel Down"
                          ><ha-icon icon="mdi:chevron-down-circle-outline"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.volume_mute
                      ? html`
                          <ha-icon-button
                            .action="${"volume_mute"}"
                            @click="${this.handleActionClick}"
                            title="Mute"
                          ><ha-icon icon="mdi:volume-mute"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.volume_down
                      ? html`
                          <ha-icon-button
                            .action="${"volume_down"}"
                            @click="${this.handleActionClick}"
                            title="Volume Down"
                          ><ha-icon icon="mdi:volume-minus"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }

          <div class="row">
            ${this._config.info
              ? html`
                  <ha-icon-button
                    .action="${"info"}"
                    @click="${this.handleActionClick}"
                    title="Info"
                  ><ha-icon icon="mdi:information"></ha-icon
                  ></ha-icon-button>
                `
              : emptyButton}
            <ha-icon-button
              .action="${"up"}"
              @click="${this.handleActionClick}"
              title="Up"
            ><ha-icon icon="mdi:menu-up"></ha-icon
            ></ha-icon-button>
            ${this._config.option
              ? html`
                  <ha-icon-button
                    .action="${"option"}"
                    @click="${this.handleActionClick}"
                    title="Option"
                  ><ha-icon icon="mdi:dots-vertical-circle"></ha-icon
                  ></ha-icon-button>
                `
              : emptyButton}
          </div>

          <div class="row">
            <ha-icon-button
              .action="${"left"}"
              @click="${this.handleActionClick}"
              title="Left"
            ><ha-icon icon="mdi:menu-left"></ha-icon
            ></ha-icon-button>
            <ha-icon-button
              .action="${"select"}"
              @click="${this.handleActionClick}"
              title="Select"
            ><ha-icon icon="mdi:checkbox-blank-circle"></ha-icon
            ></ha-icon-button>
            <ha-icon-button
              .action="${"right"}"
              @click="${this.handleActionClick}"
              title="Right"
            ><ha-icon icon="mdi:menu-right"></ha-icon
            ></ha-icon-button>
          </div>

          <div class="row">
            ${this._config.back
              ? html`
                  <ha-icon-button
                    .action="${"back"}"
                    @click="${this.handleActionClick}"
                    title="Back"
                  ><ha-icon icon="mdi:arrow-left-circle"></ha-icon
                  ></ha-icon-button>
                `
              : emptyButton}
            <ha-icon-button
              .action="${"down"}"
              @click="${this.handleActionClick}"
              title="Down"
            ><ha-icon icon="mdi:menu-down"></ha-icon
            ></ha-icon-button>
            ${this._config.setup
              ? html`
                  <ha-icon-button
                    .action="${"setup"}"
                    @click="${this.handleActionClick}"
                    title="Setup"
                  ><ha-icon icon="mdi:cog"></ha-icon
                  ></ha-icon-button>
                `
              : emptyButton}
          </div>

          ${
            this._config.channel_level || this._config.mode || this._config.memory
              ? html`
                  <div class="row">
                    ${this._config.channel_level
                      ? html`
                          <ha-icon-button
                            .action="${"channel_level"}"
                            @click="${this.handleActionClick}"
                            title="Channel Level"
                          ><ha-icon icon="mdi:tune-vertical"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.mode
                      ? html`
                          <ha-icon-button
                            .action="${"mode"}"
                            @click="${this.handleActionClick}"
                            title="Mode"
                          ><ha-icon icon="mdi:dots-horizontal"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.memory
                      ? html`
                          <ha-icon-button
                            .action="${"memory"}"
                            @click="${this.handleActionClick}"
                            title="Memory"
                          ><ha-icon icon="mdi:memory"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }

          ${
            this._config.reverse || this._config.play || this._config.forward
              ? html`
                  <div class="row">
                    ${this._config.reverse
                      ? html`
                          <ha-icon-button
                            .action="${"reverse"}"
                            @click="${this.handleActionClick}"
                            title="Rewind"
                          ><ha-icon icon="mdi:skip-backward"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.play
                      ? html`
                          <ha-icon-button
                            .action="${"play"}"
                            @click="${this.handleActionClick}"
                            title="Play/Pause"
                          ><ha-icon icon="mdi:play-pause"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.forward
                      ? html`
                          <ha-icon-button
                            .action="${"forward"}"
                            @click="${this.handleActionClick}"
                            title="Fast-Forward"
                          ><ha-icon icon="mdi:skip-forward"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }
          

          ${
            this._config.sound_mode_left || this._config.sound_mode_right || this._config.audio_delay_decrease || this._config.audio_delay_increase
              ? html`
                  <div class="row">
                    ${this._config.quick1
                      ? html`
                          <ha-icon-button
                            .action="${"quick1"}"
                            @click="${this.handleActionClick}"
                            title="Quick Select 1"
                          ><ha-icon icon="mdi:numeric-1-circle"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.quick2
                      ? html`
                          <ha-icon-button
                            .action="${"quick2"}"
                            @click="${this.handleActionClick}"
                            title="Quick Select 2"
                          ><ha-icon icon="mdi:numeric-2-circle"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.quick3
                      ? html`
                          <ha-icon-button
                            .action="${"quick3"}"
                            @click="${this.handleActionClick}"
                            title="Quick Select 3"
                          ><ha-icon icon="mdi:numeric-3-circle"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.quick4
                      ? html`
                          <ha-icon-button
                            .action="${"quick4"}"
                            @click="${this.handleActionClick}"
                            title="QUick Select 4"
                          ><ha-icon icon="mdi:numeric-4-circle"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }
          
          ${
            this._config.sound_mode_left || this._config.sound_mode_right || this._config.audio_delay_decrease || this._config.audio_delay_increase
              ? html`
                  <div class="row">
                    ${this._config.sound_mode_left
                      ? html`
                          <ha-icon-button
                            .action="${"sound_mode_left"}"
                            @click="${this.handleActionClick}"
                            title="Sound Mode Left"
                          ><ha-icon icon="mdi:chevron-left-circle-outline"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.sound_mode_right
                      ? html`
                          <ha-icon-button
                            .action="${"sound_mode_right"}"
                            @click="${this.handleActionClick}"
                            title="Sound Mode Right"
                          ><ha-icon icon="mdi:chevron-right-circle-outline"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.audio_delay_decrease
                      ? html`
                          <ha-icon-button
                            .action="${"audio_delay_decrease"}"
                            @click="${this.handleActionClick}"
                            title="Audio Delay -"
                          ><ha-icon icon="mdi:minus-circle-outline"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                    ${this._config.audio_delay_increase
                      ? html`
                          <ha-icon-button
                            .action="${"audio_delay_increase"}"
                            @click="${this.handleActionClick}"
                            title="Audio Delay +"
                          ><ha-icon icon="mdi:plus-circle-outline"></ha-icon
                          ></ha-icon-button>
                        `
                      : emptyButton}
                  </div>
                `
              : ""
          }
          
      </ha-card>
    `;
  }

  updated(changedProps) {
    if (!this._config) {
      return;
    }

    const oldHass = changedProps.get("hass");
    if (!oldHass || oldHass.themes !== this.hass.themes) {
      this.applyThemesOnElement(this, this.hass.themes, this._config.theme);
    }
  }

  renderStyle() {
    return html`
      <style>
        .remote {
          padding: 16px 0px 16px 0px;
        }
        img,
        ha-icon-button {
          width: 64px;
          height: 64px;
          cursor: pointer;
          --mdc-icon-size: 100%;
        }
        .row {
          display: flex;
          padding: 8px 36px 8px 36px;
          justify-content: space-evenly;
        }
        .diagonal {
          background-color: var(--light-primary-color);
        }
      </style>
    `;
  }

  launchApp(e) {
    this.hass.callService("media_player", "select_source", {
      entity_id: this._config.entity,
      source: e.currentTarget.value
    });
  }

  handleActionClick(e) {
    const custom_services = [
      "power",
      "power_on",
      "power_sleep",
      "power_off",
      "cable",
      "bluray",
      "dvd",
      "firetv",
      "kodi",
      "record_player",
      "game",
      "nintendo_switch",
      "tv_audio",
      "media_player",
      "usb",
      "am",
      "fm",
      "bluetooth",
      "volume_up",
      "volume_down",
      "volume_mute",
      "back",
      "setup",
      "info",
      "option",
      "channel_up",
      "channel_down",
      "up",
      "left",
      "select",
      "right",
      "down",
      "reverse",
      "play",
      "forward",
      "channel_level",
      "mode",
      "memory",
      "quick1",
      "quick2",
      "quick3",
      "quick4",
      "sound_mode_left",
      "sound_mode_right",
      "audio_delay_decrease",
      "audio_delay_increase"
    ];

    if (
      custom_services.indexOf(e.currentTarget.action) >= 0 &&
      this._config[e.currentTarget.action]
    ) {
      const [domain, service] = this._config[
        e.currentTarget.action
      ].service.split(".", 2);
      this.hass.callService(
        domain,
        service,
        this._config[e.currentTarget.action].service_data
          ? this._config[e.currentTarget.action].service_data
          : null
      );
    } else {
      const [domain, service] = this._config[
        e.currentTarget.action
      ].service.split(".", 2);
      this.hass.callService(
        domain,
        service,
        this._config[e.currentTarget.action].service_data
          ? this._config[e.currentTarget.action].service_data
          : null
      );
    }
  }

  applyThemesOnElement(element, themes, localTheme) {
    if (!element._themes) {
      element._themes = {};
    }
    let themeName = themes.default_theme;
    if (localTheme === "default" || (localTheme && themes.themes[localTheme])) {
      themeName = localTheme;
    }
    const styles = Object.assign({}, element._themes);
    if (themeName !== "default") {
      var theme = themes.themes[themeName];
      Object.keys(theme).forEach(key => {
        var prefixedKey = "--" + key;
        element._themes[prefixedKey] = "";
        styles[prefixedKey] = theme[key];
      });
    }
    if (element.updateStyles) {
      element.updateStyles(styles);
    } else if (window.ShadyCSS) {
      // implement updateStyles() method of Polemer elements
      window.ShadyCSS.styleSubtree(
        /** @type {!HTMLElement} */ (element),
        styles
      );
    }

    const meta = document.querySelector("meta[name=theme-color]");
    if (meta) {
      if (!meta.hasAttribute("default-content")) {
        meta.setAttribute("default-content", meta.getAttribute("content"));
      }
      const themeColor =
        styles["--primary-color"] || meta.getAttribute("default-content");
      meta.setAttribute("content", themeColor);
    }
  }
}

customElements.define("denon-card", DenonCardServices);
