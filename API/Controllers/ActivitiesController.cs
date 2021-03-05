using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Get all Activities
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     GET /api/activities
        ///
        /// </remarks>
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _mediator.Send(new List.Query());
        }

        /// <summary>
        /// Get activity by id
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     GET /api/activities/{id}
        ///
        /// </remarks>
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return Ok();
        }
    }
}
