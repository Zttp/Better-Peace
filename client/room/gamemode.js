import { Build, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns} from 'pixel_combats/room';
import * as peace from './options.js';
import * as teams from './default_teams.js';

// 
Damage.FriendlyFire = true;
BreackGraph.OnlyPlayerBlocksDmg = false;
BreackGraph.WeakBlocks = true;
// Возможность ломать блоки
BreackGraph.BreackAll = true;
// Отобразить Количество блоков
Ui.GetContext().QuadsCount.Value = true;
// хз
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;
// Строительные функции
peace.set_editor_options();

// Запрет урона
Damage.GetContext().DamageOut.Value = true;

// параметры игры
Properties.GetContext().GameModeName.Value = "Better-Peace";
p.Properties.Get("rid").Value = p.IdInRoom
// создаем команды
var red = GameMode.Parameters.GetBool("RedTeam");
var blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) teams.create_team_red();
if (blue || !red && !blue) teams.create_team_blue();

// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.add_Event(function (player, team) { team.Add(player); });
// спавн по входу в команду
Teams.OnPlayerChangeTeam.add_Event(function (player) { player.Spawns.Spawn(); });
// задаем подсказку
Ui.getContext().Hint.Value = "Улучшенный Мир";
// конфигурация инвентаря
peace.set_editor_inventory();

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 3;
