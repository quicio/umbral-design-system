import React from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, Bell, Check, ChevronDown, Command, Database, Gauge, Grid3X3, Layers3, Moon, Search, Settings, SlidersHorizontal, Terminal, X } from 'lucide-react';
import './design-system/tokens.css';
import './design-system/base.css';
import './design-system/components.css';
import './design-system/charts.css';
import './design-system/modes.css';
import './app.css';

const cx = (...v) => v.filter(Boolean).join(' ');

function AppShell({ children, mode = 'lab', density = 'comfortable' }) {
  return <div className={cx('umbral', `mode-${mode}`, `density-${density}`)}>{children}</div>;
}
function Header() {
  return <header className="u-header"><div><p className="u-kicker">Sistema de Diseño</p><h1>UMBRAL</h1></div><div className="u-header__meta"><span>v0.1</span><span>tokens / primitives / components</span></div></header>;
}
function Navigation() {
  const items = ['Color','Typography','Spacing','Components','Data','Charts','Modes','Motion'];
  return <nav className="u-nav">{items.map((item,i)=><a key={item} className={i===0?'is-active':''} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>;
}
function Panel({ title, children, className }) { return <section className={cx('u-panel', className)}>{title && <div className="u-panel__title">{title}</div>}{children}</section>; }
function Section({ id, eyebrow, title, children }) { return <section id={id} className="doc-section"><div className="section-heading"><p>{eyebrow}</p><h2>{title}</h2></div>{children}</section>; }
function Button({ children, variant='primary', loading, disabled }) { return <button disabled={disabled || loading} className={cx('u-button', `u-button--${variant}`, loading && 'is-loading')}>{loading ? 'Cargando' : children}</button>; }
function IconButton({ icon: Icon, label='acción' }) { return <button className="u-icon-button" aria-label={label}><Icon size={16}/></button>; }
function Input({ error, placeholder='Buscar comando, token o componente' }) { return <label className="u-field"><span>Input</span><div className={cx('u-input', error && 'has-error')}><Search size={15}/><input placeholder={placeholder}/></div>{error && <small>Error: valor requerido</small>}</label>; }
function Select() { return <label className="u-field"><span>Select</span><div className="u-select"><span>Laboratorio</span><ChevronDown size={15}/></div></label>; }
function SegmentedControl() { return <div className="u-segmented"><button className="is-active">Compact</button><button>Comfortable</button></div>; }
function Tabs() { return <div className="u-tabs"><button className="is-active">Overview</button><button>Signals</button><button>Logs</button></div>; }
function Badge({ children='ACTIVE', tone='accent' }) { return <span className={cx('u-badge', `tone-${tone}`)}><i/>{children}</span>; }
function Tag({ children }) { return <span className="u-tag">{children}</span>; }
function Status({ status='OK' }) { const tone = {OK:'success',ACTIVE:'accent',PENDING:'muted',WARN:'warning',ERROR:'error'}[status]; return <span className={cx('u-status', `tone-${tone}`)}><i/>{status}</span>; }
function Checkbox({ checked }) { return <label className="u-check"><span className={checked?'is-checked':''}>{checked && <Check size={12}/>}</span>Sincronizar estado</label>; }
function Toggle({ on }) { return <button className={cx('u-toggle', on && 'is-on')}><i/></button>; }
function Slider() { return <div className="u-slider"><div><span style={{width:'62%'}}/></div><output>0.62</output></div>; }
function ParamControl({ label='frecuencia', value='0.84' }) { return <div className="u-param"><span>{label}</span><button>-</button><strong>{value}</strong><button>+</button></div>; }
function Progress({ value=68 }) { return <div className="u-progress"><span style={{width:`${value}%`}}/></div>; }
function Divider() { return <hr className="u-divider"/>; }
function Tooltip() { return <span className="u-tooltip">hover<span>Señal contextual, no decoración.</span></span>; }
function Modal() { return <div className="u-modal"><div><h3>Confirmar acción</h3><p>Los modales son contenidos, sobrios y escasos.</p><Button>Aplicar</Button></div></div>; }
function EmptyState() { return <div className="u-empty"><Grid3X3 size={22}/><h3>Sin señales todavía</h3><p>Define una fuente o activa una visualización.</p></div>; }
function Toast() { return <div className="u-toast"><Status status="OK"/>Snapshot guardado</div>; }
function CommandBar() { return <div className="u-command"><Command size={16}/><span>⌘K</span><p>Buscar acción o componente</p></div>; }
function MetricCard({ label='Latency p95', value='124ms', context='últimos 15 min', status='OK' }) { return <article className="u-metric"><div><span>{label}</span><Status status={status}/></div><strong>{value}</strong><p>{context}</p></article>; }
function DataRow({ title='api.gateway.request', meta='12:42:08 · us-east-1', status='ACTIVE' }) { return <div className="u-data-row"><div><strong>{title}</strong><span>{meta}</span></div><Status status={status}/></div>; }
function Table() { const rows=[['scheduler.tick','52ms','OK'],['worker.queue','1.8k','WARN'],['vector.index','91%','ACTIVE'],['billing.sync','retry','ERROR']]; return <table className="u-table"><thead><tr><th>Servicio</th><th>Valor</th><th>Estado</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td><Status status={r[2]}/></td></tr>)}</tbody></table>; }
function LineChart() { return <svg className="u-chart" viewBox="0 0 320 120"><g className="grid">{[20,50,80,110].map(y=><line key={y} x1="0" y1={y} x2="320" y2={y}/>)}</g><polyline points="0,92 42,76 84,82 126,39 168,46 210,28 252,55 320,31"/><circle cx="320" cy="31" r="4"/></svg>; }
function Sparkline() { return <svg className="u-spark" viewBox="0 0 120 34"><polyline points="0,25 22,18 40,22 61,9 84,14 120,6"/></svg>; }
function BarChart() { return <div className="u-bars">{[34,60,44,76,52,28,64].map((h,i)=><i key={i} style={{height:h}}/> )}</div>; }
function Radial() { return <div className="u-radial"><span>68%</span></div>; }
function ActivityGraph() { return <div className="u-activity">{Array.from({length:42},(_,i)=><i key={i} className={i%7===0||i%11===0?'is-hot':''}/>)}</div>; }
function ParametricViz() { return <svg className="u-parametric" viewBox="0 0 640 260"><defs><pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1"/></pattern></defs><rect width="640" height="260" fill="url(#dots)"/><g className="axis"><line x1="72" y1="214" x2="576" y2="214"/><line x1="72" y1="34" x2="72" y2="214"/></g>{[0,1,2,3].map(n=><path key={n} d={`M 68 ${150+n*13} C 168 ${34+n*24}, 248 ${242-n*31}, 348 ${122+n*9} S 492 ${40+n*27}, 580 ${134-n*12}`} />)}<g className="ticks">{[120,210,300,390,480].map(x=><line key={x} x1={x} y1="208" x2={x} y2="220"/> )}</g></svg>; }

function TokenSwatches() {
  const tokens=['bg','surface','surface-raised','line','line-subtle','text','text-secondary','muted','success','warning','error','accent'];
  return <div className="token-grid">{tokens.map(t=><div key={t} className="token"><i style={{background:`var(--${t})`}}/><span>--{t}</span></div>)}</div>;
}
function Typography() { return <div className="type-demo"><h3>Headings limpios, grandes y precisos</h3><p>La interfaz usa sans geométrica para lectura y mono solo para datos, parámetros y metadatos.</p><code>MONO · timestamp=12:42:08 · x(t)=r·cos(t)</code></div>; }
function ComponentGrid() { return <div className="component-grid"><Panel title="Buttons"><div className="stack"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button><Button disabled>Disabled</Button><Button loading>Loading</Button></div></Panel><Panel title="Inputs"><Input/><Input error/><Select/><SegmentedControl/></Panel><Panel title="Controls"><Tabs/><Checkbox checked/><Checkbox/><div className="inline"><Toggle on/><Toggle/></div><Slider/><ParamControl/></Panel><Panel title="Signals"><div className="inline wrap"><Badge>ACTIVE</Badge><Badge tone="success">OK</Badge><Badge tone="warning">WARN</Badge><Badge tone="error">ERROR</Badge><Tag>parametric</Tag><Tooltip/></div><Divider/><Progress/><Toast/></Panel></div>; }
function DataComponents() { return <div className="data-grid"><MetricCard/><MetricCard label="Error budget" value="98.4%" status="WARN"/><MetricCard label="Queue depth" value="1.8k" status="ACTIVE"/><Panel title="Data rows"><DataRow/><DataRow title="cache.invalidate" status="PENDING"/><DataRow title="billing.sync" status="ERROR"/></Panel><Panel title="Table" className="span-2"><Table/></Panel></div>; }
function Charts() { return <div className="chart-grid"><Panel title="Line chart"><LineChart/></Panel><Panel title="Sparkline"><Sparkline/></Panel><Panel title="Bar chart"><BarChart/></Panel><Panel title="Radial"><Radial/></Panel><Panel title="Activity"><ActivityGraph/></Panel><Panel title="Parametric moment" className="span-2"><ParametricViz/></Panel></div>; }
function Modes() { const modes=[['operativo','Mayor densidad, métricas, logs, tablas y decisiones rápidas.'],['humano','Menor densidad, tareas, notas, narrativa y pequeños momentos editoriales.'],['laboratorio','Retículas, coordenadas, parámetros, visualizaciones generativas y datos técnicos.']]; return <div className="mode-grid">{modes.map(([m,d])=><article className={`mode-card mode-${m==='laboratorio'?'lab':m}`} key={m}><span>{m}</span><h3>{m.toUpperCase()}</h3><p>{d}</p><MetricCard label="Signal" value="0.84" context="modo activo"/></article>)}</div>; }

function DesignSystemPage() {
  return <AppShell mode="lab"><Header/><Navigation/><main className="doc-layout"><aside><Panel title="Principio"><p>Si dudas entre agregar algo o eliminarlo: elimínalo.</p><CommandBar/><div className="icon-row"><IconButton icon={Settings}/><IconButton icon={Bell}/><IconButton icon={Terminal}/><IconButton icon={Database}/><IconButton icon={Gauge}/><IconButton icon={Layers3}/><IconButton icon={SlidersHorizontal}/><IconButton icon={Activity}/></div></Panel></aside><div className="doc-main"><Section id="color" eyebrow="01 · Tokens" title="Color, acentos y fuente única de verdad"><TokenSwatches/><Panel title="Accent packs"><div className="accent-packs"><div data-accent="caleta"><b>Caleta</b><span>humano / cotidiano</span></div><div data-accent="operativo"><b>Operativo</b><span>acción técnica</span></div><div data-accent="parametrico"><b>Paramétrico</b><span>visualización experimental</span></div></div></Panel></Section><Section id="typography" eyebrow="02 · Typography" title="Sans para interfaz, mono para datos"><Typography/></Section><Section id="spacing" eyebrow="03 · Spacing & density" title="Aire estructural, densidad variable"><Panel><div className="spacing-demo">{['1','2','3','4','6','8','12'].map(s=><span key={s} style={{width:`var(--space-${s})`,height:`var(--space-${s})`}}>{s}</span>)}</div><SegmentedControl/></Panel></Section><Section id="components" eyebrow="04 · Components" title="Componentes base y estados"><ComponentGrid/></Section><Section id="data" eyebrow="05 · Data" title="Componentes para interfaces técnicas"><DataComponents/></Section><Section id="charts" eyebrow="06 · Charts" title="Primitivas de datos y momentos paramétricos"><Charts/></Section><Section id="modes" eyebrow="07 · Expression modes" title="Operativo, Humano, Laboratorio"><Modes/></Section><Section id="motion" eyebrow="08 · Motion" title="Movimiento mínimo, feedback preciso"><div className="motion-rule"><p>Motion existe para cambios de estado, navegación, aparición/desaparición, feedback y visualizaciones. Nunca para impresionar.</p><EmptyState/><Modal/></div></Section></div></main></AppShell>;
}

function Home() { return location.pathname === '/design-system' ? <DesignSystemPage/> : <DesignSystemPage/>; }

createRoot(document.getElementById('root')).render(<Home/>);
