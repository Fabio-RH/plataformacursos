import React from 'react';
import './Test.css';
const Highlight = ({ children }) => (
  <span className="sys-highlight">{children}</span>
);

export default function Test() {
  return (
    <div className="sys-container">
      <code>
        <Highlight>System:</Highlight>
        <Highlight>Kernel:</Highlight> 6.17.0-35-generic <Highlight>arch:</Highlight> x86_64 <Highlight>bits:</Highlight> 64 <Highlight>compiler:</Highlight> gcc <Highlight>v:</Highlight> 13.3.0
        <Highlight>Desktop:</Highlight> Xfce <Highlight>v:</Highlight> 4.18.1 <Highlight>Distro:</Highlight> Linux Mint 22.3 Zena
        <Highlight>base:</Highlight> Ubuntu 24.04 noble
      </code>

<p><code>
        <Highlight>Machine:</Highlight>
        <Highlight>Type:</Highlight> Laptop <Highlight>System:</Highlight> Dell <Highlight>product:</Highlight> Inspiron 15-3567 <Highlight>v:</Highlight> N/A
        <Highlight>serial:</Highlight> &lt;secreto né tio&gt;
        <Highlight>Mobo:</Highlight> Dell <Highlight>model:</Highlight> 06J0HF <Highlight>v:</Highlight> A00 <Highlight>serial:</Highlight> &lt;secreto né tio&gt; <Highlight>UEFI:</Highlight> Dell
        <Highlight>v:</Highlight> 2.19.0 <Highlight>date:</Highlight> 03/22/2022
      </code></p>
      <p><code>
        <Highlight>Battery:</Highlight>
        <Highlight>ID-1:</Highlight> BAT0 <Highlight>charge:</Highlight> 28.3 Wh (100.0%) <Highlight>condition:</Highlight> 28.3/41.4 Wh (68.4%)
        <Highlight>volts:</Highlight> 16.9 <Highlight>min:</Highlight> 14.8 <Highlight>model:</Highlight> Panasonic DELL 7GNNN86 <Highlight>status:</Highlight> full
      </code></p>
      <p><code>
        <Highlight>CPU:</Highlight>
        <Highlight>arch:</Highlight> Skylake <Highlight>rev:</Highlight> 3 <Highlight>cache:</Highlight> <Highlight>L1:</Highlight> 128 KiB <Highlight>L2:</Highlight> 512 KiB <Highlight>L3:</Highlight> 3 MiB
        <Highlight>Speed (MHz):</Highlight> <Highlight>avg:</Highlight> 500 <Highlight>min/max:</Highlight> 400/2000 <Highlight>cores:</Highlight> <Highlight>1:</Highlight> 500 <Highlight>2:</Highlight> 500 <Highlight>3:</Highlight> 500 <Highlight>4:</Highlight> 500
        <Highlight>bogomips:</Highlight> 15999
        <Highlight>Flags:</Highlight> avx avx2 ht lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx
      </code></p>
      <p><code>
        <Highlight>Graphics:</Highlight>
        <Highlight>Device-1:</Highlight> Intel Skylake GT2 [HD Graphics 520] <Highlight>vendor:</Highlight> Dell <Highlight>driver:</Highlight> i915
        <Highlight>v:</Highlight> kernel <Highlight>arch:</Highlight> Gen-9 <Highlight>bus-ID:</Highlight> 00:02.0
        <Highlight>Device-2:</Highlight> Realtek Integrated_Webcam_HD <Highlight>driver:</Highlight> uvcvideo <Highlight>type:</Highlight> USB
        <Highlight>bus-ID:</Highlight> 1-5:2
        <Highlight>Display:</Highlight> x11 <Highlight>server:</Highlight> X.Org <Highlight>v:</Highlight> 21.1.11 <Highlight>with:</Highlight> Xwayland <Highlight>v:</Highlight> 23.2.6 <Highlight>driver:</Highlight> <Highlight>X:</Highlight>
        <Highlight>loaded:</Highlight> modesetting <Highlight>unloaded:</Highlight> fbdev,vesa <Highlight>dri:</Highlight> iris <Highlight>gpu:</Highlight> i915
        <Highlight>resolution:</Highlight> 1366x768~60Hz
        <Highlight>API:</Highlight> EGL <Highlight>v:</Highlight> 1.5 <Highlight>drivers: </Highlight> iris,swrast <Highlight>platforms:</Highlight>
        <Highlight>active:</Highlight> gbm,x11,surfaceless,device <Highlight>inactive:</Highlight> wayland
        <Highlight>API:</Highlight> OpenGL <Highlight>v:</Highlight> 4.6 <Highlight>compat-v:</Highlight> 4.5 <Highlight>vendor:</Highlight> intel mesa
        <Highlight>v:</Highlight> 25.2.8-0ubuntu0.24.04.1 <Highlight>glx-v:</Highlight> 1.4 <Highlight>direct-render:</Highlight> yes <Highlight>renderer:</Highlight> Mesa Intel HD Graphics 520 (SKL GT2)
        <Highlight>API:</Highlight> Vulkan <Highlight>v:</Highlight> 1.3.275 <Highlight>drivers:</Highlight> N/A <Highlight>surfaces:</Highlight> xcb,xlib <Highlight>devices:</Highlight> 2
      </code></p>
      <p><code>
        <Highlight>Audio:</Highlight>
        <Highlight>Device-1:</Highlight> Intel Sunrise Point-LP HD Audio <Highlight>vendor:</Highlight> Dell <Highlight>driver:</Highlight> snd_hda_intel
        <Highlight>v:</Highlight> kernel <Highlight>bus-ID:</Highlight> 00:1f.3
        <Highlight>API:</Highlight> ALSA <Highlight>v:</Highlight> k6.17.0-35-generic <span className="sys-highlight">status:</span> kernel-api
        <Highlight>Server-1:</Highlight> PipeWire <Highlight>v:</Highlight> 1.0.5 <Highlight>status:</Highlight> active
      </code></p>
      <p><code>
        <Highlight>Network:</Highlight>
        <Highlight>Device-1:</Highlight> Qualcomm Atheros QCA9565 / AR9565 Wireless Network Adapter
        <Highlight>vendor:</Highlight> Dell Vostro 3470 <Highlight>driver:</Highlight> ath9k <Highlight>v:</Highlight> kernel <Highlight>bus-ID:</Highlight> 01:00.0
        <Highlight>IF:</Highlight> wlp1s0 <Highlight>state:</Highlight> up <Highlight>mac:</Highlight> &lt;filter&gt;
        <Highlight>Device-2:</Highlight> Realtek RTL810xE PCI Express Fast Ethernet <Highlight>vendor:</Highlight> Dell
        <Highlight>driver:</Highlight> r8169 <Highlight>v:</Highlight> kernel <Highlight>port:</Highlight> e000 <Highlight>bus-ID:</Highlight> 02:00.0
        <Highlight>IF:</Highlight> enp2s0 <Highlight>state:</Highlight> down <Highlight>mac:</Highlight> &lt;filter&gt;
        <Highlight>IF-ID-1:</Highlight> br-c0f7b26170ed <Highlight>state:</Highlight> down <Highlight>mac:</Highlight> &lt;filter&gt;
        <Highlight>IF-ID-2:</Highlight> docker0 <Highlight>state:</Highlight> down <Highlight>mac:</Highlight> &lt;filter&gt;
      </code></p>
      <p><code>
        <Highlight>Bluetooth:</Highlight>
        <Highlight>Device-1:</Highlight> Qualcomm Atheros <Highlight>driver:</Highlight> btusb <Highlight>v:</Highlight> 0.8 <Highlight>type:</Highlight> USB <Highlight>bus-ID:</Highlight> 1-8:5
        <Highlight>Report:</Highlight> hciconfig <Highlight>ID:</Highlight> hci0 <Highlight>rfk-id:</Highlight> 1 <Highlight>state:</Highlight> down
        <Highlight>bt-service:</Highlight> enabled,running <Highlight>rfk-block:</Highlight> <Highlight>hardware:</Highlight> no <Highlight>software:</Highlight> yes
        <Highlight>address:</Highlight> &lt;filter&gt;
      </code></p>
      <p><code>
        <Highlight>Drives:</Highlight>
        <Highlight>Local Storage:</Highlight> <Highlight>total:</Highlight> 119.24 GiB <Highlight>used:</Highlight> 23.37 GiB (19.6%)
        <Highlight>ID-1:</Highlight> /dev/sda <Highlight>vendor:</Highlight> Big Reservoir <Highlight>model:</Highlight> BR 128GB <Highlight>size:</Highlight> 119.24 GiB
      </code></p>
      <code>
        <Highlight>Partition:</Highlight>
        <Highlight>ID-1:</Highlight> / <Highlight>size:</Highlight> 116.32 GiB <Highlight>used:</Highlight> 23.36 GiB (20.1%) <Highlight>fs:</Highlight> ext4 <Highlight>dev:</Highlight> /dev/sda2
        <Highlight>ID-2:</Highlight> /boot/efi <Highlight>size:</Highlight> 511 MiB <Highlight>used:</Highlight> 6.2 MiB (1.2%) <Highlight>fs:</Highlight> vfat <Highlight>dev:</Highlight> /dev/sda1
      </code>
      <code>
        <Highlight>Swap:</Highlight>
        <Highlight>ID-1:</Highlight> swap-1 <Highlight>type:</Highlight> file <Highlight>size: </Highlight> 4.07 GiB <Highlight>used:</Highlight> 266.3 MiB (6.4%)
        <Highlight>file:</Highlight> /swapfile
      </code>
      <code>
        <Highlight>Sensors:</Highlight>
        <Highlight>System Temperatures:</Highlight> <Highlight>cpu:</Highlight> 49.0 C <Highlight>pch:</Highlight> 46.5 C <Highlight>mobo:</Highlight> 46.0 C
        <Highlight>Fan Speeds (rpm):</Highlight> <Highlight>cpu:</Highlight> 0
      </code>
      <code>
        <Highlight>Info:</Highlight>
        <Highlight>Memory:</Highlight> <Highlight>total:</Highlight> 4 GiB <Highlight>available:</Highlight> 3.57 GiB <Highlight>used:</Highlight> 2.76 GiB (77.5%)
        <Highlight>Processes:</Highlight> 236 <Highlight>Uptime:</Highlight> 46m <Highlight>Init:</Highlight> systemd <Highlight>target:</Highlight> graphical (5)
        <Highlight>Packages:</Highlight> 2367 <Highlight>Compilers:</Highlight> <Highlight>gcc:</Highlight> 13.3.0 <Highlight>Shell:</Highlight> Bash <Highlight>v:</Highlight> 5.2.21 <Highlight>inxi:</Highlight> 3.3.34
      </code>

    </div>
  );
}