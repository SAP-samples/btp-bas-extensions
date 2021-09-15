// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const cp = require('child_process');

/*
function getTask() {
    const taskDef = {
        type: 'shell'
    };
    const execution = new vscode.ShellExecution('chdir', {
        cwd: 'C:\\Windows\\System32'
    }); 
    return new vscode.Task(taskDef, 'print_cwd', 'myext', execution);
}
*/

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let out = vscode.window.createOutputChannel("Python Installer");

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "bas-installer-extension" is now active!');
	out.appendLine('Congratulations, your extension "bas-installer-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	// Python
	let disposable = vscode.commands.registerCommand('bas-installer-extension.pythonInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("Python Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('Python Installer Begins!');

		vscode.window.showInformationMessage('Python 3.9.2 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_python.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_python.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('Python Installer Finished!');
						vscode.window.showInformationMessage('Python 3.9.2 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "python -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('Python Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});

	context.subscriptions.push(disposable);

	// NOTROOT
	let disposable2 = vscode.commands.registerCommand('bas-installer-extension.notrootInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("NOTROOT Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('NOTROOT Installer Begins!');

		vscode.window.showInformationMessage('NOTROOT Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_notroot.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_notroot.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('NOTROOT Installer Finished!');
						vscode.window.showInformationMessage('NOTROOT Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "jq -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('NOTROOT Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable2);

	// CF DefaultEnv
	let disposable3 = vscode.commands.registerCommand('bas-installer-extension.cfdefenvInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("CF DefaultEnv Plugin Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('CF DefaultEnv Plugin Installer Begins!');

		vscode.window.showInformationMessage('CF DefaultEnv Plugin Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}

		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_defenv.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		//var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_notroot.sh";
		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_cfdefenv.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('NOTROOT Installer Finished!');
						vscode.window.showInformationMessage('CF DefaultEnv Plugin Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "jq -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('CF DefaultEnv Plugin Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable3);
	// CF SMSI
	let disposable4 = vscode.commands.registerCommand('bas-installer-extension.cfsmsiInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("CF SMSI Plugin Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('CF SMSI Plugin Installer Begins!');

		vscode.window.showInformationMessage('CF SMSI Plugin Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_smsi.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_cfsmsi.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('NOTROOT Installer Finished!');
						vscode.window.showInformationMessage('CF SMSI Plugin Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "jq -V" in a new terminal window.');
					});
				}
				else {
					out.appendLine('CF SMSI Plugin Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable4);
	// HA Yo Gens
	let disposable5 = vscode.commands.registerCommand('bas-installer-extension.yohagenInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SAP HANA Academy yeoman generators Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SAP HANA Academy yeoman generators Installer Begins!');

		var shellcmd = "npm install --global generator-saphanaacademy-mta";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "npm install --global generator-saphanaacademy-haa";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				shellcmd = "npm install --global generator-saphanaacademy-odata";
				out.appendLine('shellcmd: ' + shellcmd);

				cp.exec(shellcmd, (err, stdout, stderr) => {
					out.appendLine('rm -f stdout: ' + stdout);
					out.appendLine('rm -f stderr: ' + stderr);
					if (err) {
						out.appendLine('rm -f error: ' + err);
					}


					shellcmd = "npm install --global generator-saphanaacademy-saas";
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}

						shellcmd = "npm install -g generator-saphanaacademy-cap";
						out.appendLine('shellcmd: ' + shellcmd);
	
						cp.exec(shellcmd, (err, stdout, stderr) => {
							out.appendLine('rm -f stdout: ' + stdout);
							out.appendLine('rm -f stderr: ' + stderr);
							if (err) {
								out.appendLine('rm -f error: ' + err);
							}
							out.appendLine('SAP HANA Academy yeoman generators Installer Finished!');
							vscode.window.showInformationMessage('SAP HANA Academy yeoman generators Installed OK.');
							
							vscode.window.showInformationMessage('Verify with "yo" in a new terminal window.');
						});
					});
				});
			});
		});
	});

	context.subscriptions.push(disposable5);

	// PE Yo Gens
	let disposable6 = vscode.commands.registerCommand('bas-installer-extension.yopegenInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SAP Partner Engineering yeoman generator Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SAP Partner Engineering yeoman generators Installer Begins!');
		vscode.window.showInformationMessage('SAP Partner Engineering yeoman generator Installer Begins!');

		var shellcmd = "npm install --global generator-sap-partner-eng";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			out.appendLine('SAP Partner Engineering yeoman generator Installer Finished!');
			vscode.window.showInformationMessage('SAP Partner Engineering yeoman generator Installed OK.');
			
			vscode.window.showInformationMessage('Verify with "yo" in a new terminal window.');
		});
	});

	context.subscriptions.push(disposable6);

	// HANA-CLI
	let disposable7 = vscode.commands.registerCommand('bas-installer-extension.hanacliInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("HANA-CLI Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('HANA-CLI Installer Begins!');
		vscode.window.showInformationMessage('HANA-CLI Installer Begins!');

		var shellcmd = "npm install --global hana-cli";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			out.appendLine('HANA-CLI Installer Finished!');
			vscode.window.showInformationMessage('HANA-CLI Installed OK.');
			
			vscode.window.showInformationMessage('Verify with "hana-cli version" in a new terminal window.');
		});
	});

	context.subscriptions.push(disposable7);

	
	// GoLang
	let disposable8a = vscode.commands.registerCommand('bas-installer-extension.golang_1_12_1_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("GoLang 1.12.1 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('GoLang 1.12.1 Installer Begins!');

		vscode.window.showInformationMessage('GoLang 1.12.1 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_golang.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_golang.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 1_12_1";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('GoLang Installer Finished!');
						vscode.window.showInformationMessage('GoLang 1.12.1 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "go version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('GoLang 1.12.1 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});

	context.subscriptions.push(disposable8a);

	let disposable8b = vscode.commands.registerCommand('bas-installer-extension.golang_1_13_15_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("GoLang 1.13.15 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('GoLang 1.13.15 Installer Begins!');

		vscode.window.showInformationMessage('GoLang 1.13.15 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}

		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_golang.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_golang.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 1_13_15";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('GoLang Installer Finished!');
						vscode.window.showInformationMessage('GoLang 1.13.15 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "go version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('GoLang 1.13.15 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});

	context.subscriptions.push(disposable8b);

	let disposable8c = vscode.commands.registerCommand('bas-installer-extension.golang_1_16_3_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("GoLang 1.16.3 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('GoLang 1.16.3 Installer Begins!');

		vscode.window.showInformationMessage('GoLang 1.16.3 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_golang.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_golang.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 1_16_3";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('GoLang Installer Finished!');
						vscode.window.showInformationMessage('GoLang 1.16.3 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "go version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('GoLang 1.16.3 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});

	context.subscriptions.push(disposable8c);

	// mitmproxy
	let disposable9 = vscode.commands.registerCommand('bas-installer-extension.mitmproxyInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("mitmproxy Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('mitmproxy Installer Begins!');

		vscode.window.showInformationMessage('mitmproxy Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_mitmproxy.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_mitmproxy.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('mitmproxy Installer Finished!');
						vscode.window.showInformationMessage('mitmproxy Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "mitmproxy --options" in a new terminal window.');
					});
				}
				else {
					out.appendLine('mitmproxy Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable9);

	// BTP CLI
	let disposable10 = vscode.commands.registerCommand('bas-installer-extension.btpcliInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SAP BTP CLI Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SAP BTP CLI Installer Begins!');

		vscode.window.showInformationMessage('SAP BTP CLI Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_btp_cli.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_btp_cli.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SAP BTP CLI Installer Finished!');
						vscode.window.showInformationMessage('SAP BTP CLI Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "btp --info" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SAP BTP CLI Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable10);
	
	// Theta CLI
	let disposable11 = vscode.commands.registerCommand('bas-installer-extension.thetacliInstaller', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SAP Theta CLI Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SAP Theta CLI Installer Begins!');

		vscode.window.showInformationMessage('SAP Theta CLI Installer Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_theta_cli.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_theta_cli.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile;
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SAP Theta CLI Installer Finished!');
						vscode.window.showInformationMessage('SAP Theta CLI Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "thetacli version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SAP Theta CLI Installer Finished!');
				}
			});
		});
		
	});

	context.subscriptions.push(disposable11);
	
	// solc_0_8_4
	let disposable12a = vscode.commands.registerCommand('bas-installer-extension.solc_0_8_4_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.8.4 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.8.4 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.8.4 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_8_4";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.8.4 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.8.4 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_8_4

	context.subscriptions.push(disposable12a);

	// solc_0_7_6
	let disposable12b = vscode.commands.registerCommand('bas-installer-extension.solc_0_7_6_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.7.6 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.7.6 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.7.6 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_7_6";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.7.6 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.7.6 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_7_6

	context.subscriptions.push(disposable12b);

	// solc_0_6_12
	let disposable12c = vscode.commands.registerCommand('bas-installer-extension.solc_0_6_12_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.6.12 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.6.12 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.6.12 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_6_12";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.6.12 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.6.12 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_6_12

	context.subscriptions.push(disposable12c);

	// solc_0_5_17
	let disposable12d = vscode.commands.registerCommand('bas-installer-extension.solc_0_5_17_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.5.17 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.5.17 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.5.17 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_5_17";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.5.17 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.5.17 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_5_17

	context.subscriptions.push(disposable12d);

	// solc_0_5_0
	let disposable12e = vscode.commands.registerCommand('bas-installer-extension.solc_0_5_0_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.5.0 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.5.0 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.5.0 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_5_0";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.5.0 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.5.0 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_5_0

	context.subscriptions.push(disposable12e);

	// solc_0_4_26
	let disposable12f = vscode.commands.registerCommand('bas-installer-extension.solc_0_4_26_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.4.26 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.4.26 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.4.26 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_4_26";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.4.26 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.4.26 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_4_26

	context.subscriptions.push(disposable12f);

	// solc_0_4_16
	let disposable12g = vscode.commands.registerCommand('bas-installer-extension.solc_0_4_16_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.4.16 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.4.16 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.4.16 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_4_16";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.4.16 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.4.16 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_4_16

	context.subscriptions.push(disposable12g);

	// solc_0_3_6
	let disposable12h = vscode.commands.registerCommand('bas-installer-extension.solc_0_3_6_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.3.6 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.3.6 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.3.6 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_3_6";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.3.6 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.3.6 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_3_6

	context.subscriptions.push(disposable12h);

	// solc_0_2_2
	let disposable12i = vscode.commands.registerCommand('bas-installer-extension.solc_0_2_2_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.2.2 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.2.2 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.2.2 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_2_2";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.2.2 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.2.2 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_2_2

	context.subscriptions.push(disposable12i);

	// solc_0_1_7
	let disposable12j = vscode.commands.registerCommand('bas-installer-extension.solc_0_1_7_Installer', function () {
		// The code you place here will be executed every time your command is executed

		let out = vscode.window.createOutputChannel("SOLC 0.1.7 Installer");

		// Display a message box to the user
		out.clear();
		out.appendLine('SOLC 0.1.7 Installer Begins!');

		vscode.window.showInformationMessage('SOLC 0.1.7 Install Begins.');

		var destdir = context.storageUri;

		if (typeof destdir == "undefined") {
			destdir = "/tmp";
		} else {
			destdir = "/tmp";
		}


		//let destdir = "/home/user";
		//let destdir = "/tmp";
		//let destdir = ".";
		out.appendLine('destdir: ' + destdir);

		let destfile = destdir + "/bas_install_solc.sh";
		out.appendLine('destfile: ' + destfile);

		let remove_sh_file = false;

		vscode.workspace.fs.createDirectory(destdir);

		// let currentTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");
		vscode.workspace.getConfiguration("workbench", (currentTheme) => {
			out.appendLine('currentTheme: ' + currentTheme);
		});

		//await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Red");

		//let newTheme = await vscode.workspace.getConfiguration().get("workbench.colorTheme");

		// let settings = vscode.workspace.getConfiguration("python");
		// settings.update("condaPath", "whatever") => {
		// 	ConfigurationLoader.LoadConfiguration() => {

		// 	}
		// }
		// await ;

		var shellcmd = "curl -s -L -o " + destfile + " https://raw.githubusercontent.com/SAP-samples/btp-bas-extensions/main/tools/bas_install_solc.sh";
		out.appendLine('shellcmd: ' + shellcmd);
		console.log()

		cp.exec(shellcmd, (err, stdout, stderr) => {
			out.appendLine('curl stdout: ' + stdout);
			out.appendLine('curl stderr: ' + stderr);
			if (err) {
				out.appendLine('curl error: ' + err);
			}

			shellcmd = "/bin/bash " + destfile + " 0_1_7";
			out.appendLine('shellcmd: ' + shellcmd);

			cp.exec(shellcmd, (err, stdout, stderr) => {
				out.appendLine('bash stdout: ' + stdout);
				out.appendLine('bash stderr: ' + stderr);
				if (err) {
					out.appendLine('bash error: ' + err);
				}

				if (remove_sh_file) {
					shellcmd = "rm -f " + destfile;
					out.appendLine('shellcmd: ' + shellcmd);

					cp.exec(shellcmd, (err, stdout, stderr) => {
						out.appendLine('rm -f stdout: ' + stdout);
						out.appendLine('rm -f stderr: ' + stderr);
						if (err) {
							out.appendLine('rm -f error: ' + err);
						}
						out.appendLine('SOLC Installer Finished!');
						vscode.window.showInformationMessage('SOLC 0.1.7 Installed OK.');

						
						vscode.window.showInformationMessage('Verify with "solc --version" in a new terminal window.');
					});
				}
				else {
					out.appendLine('SOLC 0.1.7 Installer Finished!');
				}
			});
		});
		

		// Display a message box to the user
		//vscode.window.showInformationMessage('Python Installer Finished!');
	});
	// End 0_1_7

	context.subscriptions.push(disposable12j);

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
