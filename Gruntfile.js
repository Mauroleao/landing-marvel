// Gruntfile.js

module.exports = function(grunt) {
  // 1. Importe o compilador Sass que instalamos
  const sass = require('sass');

  // Configuração do projeto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tarefa para compilar SASS para CSS
    sass: {
      dist: {
        options: {
          // 2. Especifique a implementação e o estilo
          implementation: sass,
          style: 'expanded' // ou 'compressed' para produção
        },
        files: {
          'css/style.css': 'sass/main.scss'
        }
      }
    },

    // Tarefa para observar alterações (continua igual)
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // 3. Carregue os plugins corretos
  grunt.loadNpmTasks('grunt-sass'); // <- Alterado!
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Define as tarefas (continua igual)
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['sass', 'watch']);
};