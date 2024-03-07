import { DisplayValueHeader } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, Build, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, contextedProperties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';
import * as peace from './options.js';
import * as teams from './default_teams.js';
import * as API from 'pixel_combats/room';
import * as room from 'pixel_combats/room';
import * as player from './default_teams.js';
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
// задает опции режима мир, выбранные при создании комнаты
export function apply_room_options() {
    const gameModeParameters = room.GameMode.Parameters;

    // опции строительства
    const buildContext = room.Build.GetContext();
    buildContext.FloodFill.Value = gameModeParameters.GetBool("FloodFill");
    buildContext.FillQuad.Value = gameModeParameters.GetBool("FillQuad");
    buildContext.RemoveQuad.Value = gameModeParameters.GetBool("RemoveQuad");
    buildContext.FlyEnable.Value = gameModeParameters.GetBool("Fly");

    contextedProperties.GetContext().SkinType.Value = 1 = gameModeParameters.GetBool("Zombie");
    
    // прочие опции
    room.Damage.GetContext().DamageOut.Value = gameModeParameters.GetBool("Damage");
    room.BreackGraph.OnlyPlayerBlocksDmg = gameModeParameters.GetBool("PartialDesruction");
    room.BreackGraph.WeakBlocks = gameModeParameters.GetBool("LoosenBlocks");
}

// Запрет урона
Damage.GetContext().DamageOut.Value = true;

// параметры игры
Properties.GetContext().GameModeName.Value = "Better-Peace";
contextedProperties.GetContext().SkinType.Value = 2;
contextedProperties.GetContext().MaxHp.Value = 505;
player.Properties.Get('status').Value = 'admin';
});
// создаем команды
var red = GameMode.Parameters.GetBool("RedTeam");
var blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) teams.create_team_red();
if (blue || !red && !blue) teams.create_team_blue();

// настраиваем параметры, которые нужно выводить в лидерборде
LeaderBoard.PlayerLeaderBoardValues = [
	new DisplayValueHeader("Kills", "<color=red>Убийства</a>", "<color=red>Убийства</a>"),
	new DisplayValueHeader("Deaths", "<color=orange>Смерти</a>", "<color=orange>Смерти</a>"),
	new DisplayValueHeader("Spawns", "<color=yellow>Спавны</a>", "<color=yellow>Спавны</a>"),
	new DisplayValueHeader("status", "<color=lime>qupe</a>", "<color=green>qupe</a>")
];

// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.add_Event(function (player, team) { team.Add(player); });
// спавн по входу в команду
Teams.OnPlayerChangeTeam.add_Event(function (player) { player.Spawns.Spawn(); });
// ������� �������
Spawns.OnSpawn.Add(function (player) {
	++player.Properties.Spawns.Value;
});
// ������� �������
Damage.OnDeath.Add(function (player) {
	++player.Properties.Deaths.Value;
});

// задаем подсказку
Ui.getContext().Hint.Value = "TIP: стройте карты в редакторе, а не в мире";
Ui.getContext().Hint.Value = "TIP: используй лопату , если строишь карту";
// конфигурация инвентаря
peace.set_editor_inventory();
// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 3;
